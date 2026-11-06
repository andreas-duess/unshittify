// Live GitHub data for the site: star counts, releases and the activity feed.
//
// The build knows nothing about GitHub. Each entry's repo and first-commit
// date go out in /projects.json; this worker does the rest:
//   refresh()   runs hourly (cron in wrangler.jsonc). Fetches stars and
//               releases, works out new events, stores everything in KV.
//   fill()      runs on page views. Fills the empty slots the build left in
//               the HTML (star counts, the "github" field, the most-starred
//               group, the activity lists), so the numbers are in the HTML
//               that browsers and search engines get.
//   activityXml(), starsJson()  the RSS feed and the raw numbers.
// If KV is empty or GitHub is down, pages still work: the slots stay hidden
// or show a "loading" line.

export interface GhEnv {
  ASSETS: Fetcher;
  GH: KVNamespace;
  GITHUB_TOKEN?: string;
}

type Repo = { stars: number; archived: boolean; pushed: string };
type Event =
  | { key: string; type: 'added'; date: string; slug: string }
  | { key: string; type: 'release'; date: string; slug: string; tag: string; url: string }
  | { key: string; type: 'stars'; date: string; slug: string; stars: number }
  | { key: string; type: 'archived'; date: string; slug: string };
type State = { fetched: string; repos: Record<string, Repo>; events: Event[]; titles: Record<string, string> };
type History = Record<string, Record<string, number>>; // date -> repo -> stars

const SITE = 'https://unshittify.dev';
const MILESTONES = [100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000];
const RELEASE_DAYS = 90;
const MAX_EVENTS = 400;
const HISTORY_DAYS = 400;
const TOP = 10;

// ------------------------------------------------------------------ refresh

export async function refresh(env: GhEnv): Promise<string> {
  if (!env.GITHUB_TOKEN) return 'no GITHUB_TOKEN secret, skipped';
  const res = await env.ASSETS.fetch('https://assets.local/projects.json');
  const entries = ((await res.json()) as { projects: { slug: string; title: string; repo?: string; added?: string | null }[] }).projects;
  const slugOf: Record<string, string> = {};
  for (const e of entries) if (e.repo) slugOf[e.repo] ??= e.slug;
  const repos = Object.keys(slugOf);

  const result: Record<string, Repo> = {};
  const releases: Record<string, { tagName: string; publishedAt: string; url: string }[]> = {};
  for (let i = 0; i < repos.length; i += 40) {
    const chunk = repos.slice(i, i + 40);
    const fields = chunk.map((r, j) => {
      const [o, n] = r.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) {
        stargazerCount isArchived pushedAt
        releases(first: 5, orderBy: { field: CREATED_AT, direction: DESC }) { nodes { tagName publishedAt url isPrerelease isDraft } }
      }`;
    }).join('\n');
    const r = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { authorization: `bearer ${env.GITHUB_TOKEN}`, 'content-type': 'application/json', 'user-agent': 'unshittify-worker' },
      body: JSON.stringify({ query: `{ ${fields} }` }),
    });
    if (!r.ok) throw new Error(`GitHub HTTP ${r.status}`);
    const { data } = (await r.json()) as { data?: Record<string, any> };
    if (!data) throw new Error('GitHub returned no data');
    chunk.forEach((repo, j) => {
      const x = data[`r${j}`];
      if (!x) return; // renamed or deleted; it keeps its last numbers out of the page
      result[repo] = { stars: x.stargazerCount, archived: x.isArchived, pushed: String(x.pushedAt).slice(0, 10) };
      releases[repo] = x.releases.nodes.filter((n: any) => !n.isDraft && !n.isPrerelease && n.publishedAt);
    });
  }

  const today = new Date().toISOString().slice(0, 10);
  const prev = ((await env.GH.get('state', 'json')) as State | null) ?? { fetched: '', repos: {}, events: [], titles: {} };
  const history = ((await env.GH.get('history', 'json')) as History | null) ?? {};
  history[today] = Object.fromEntries(Object.entries(result).map(([r, v]) => [r, v.stars]));
  const days = Object.keys(history).sort();
  for (const d of days.slice(0, Math.max(0, days.length - HISTORY_DAYS))) delete history[d];

  const events = new Map(prev.events.map((e) => [e.key, e] as const));
  const add = (e: Event) => { if (!events.has(e.key)) events.set(e.key, e); };

  for (const e of entries) if (e.added) add({ key: `added:${e.slug}`, type: 'added', date: e.added, slug: e.slug });

  const since = new Date(Date.now() - RELEASE_DAYS * 864e5).toISOString().slice(0, 10);
  for (const [r, list] of Object.entries(releases)) {
    for (const n of list) {
      const date = n.publishedAt.slice(0, 10);
      if (date >= since) add({ key: `release:${r}:${n.tagName}`, type: 'release', date, slug: slugOf[r], tag: n.tagName, url: n.url });
    }
  }

  // A milestone is a count crossing a threshold between two daily snapshots.
  const kept = Object.keys(history).sort();
  for (let i = 1; i < kept.length; i++) {
    const a = history[kept[i - 1]], b = history[kept[i]];
    for (const [r, now] of Object.entries(b)) {
      const before = a[r];
      if (before === undefined || !slugOf[r]) continue;
      for (const m of MILESTONES) if (before < m && now >= m) add({ key: `stars:${r}:${m}`, type: 'stars', date: kept[i], slug: slugOf[r], stars: m });
    }
  }

  for (const [r, v] of Object.entries(result)) {
    if (v.archived && prev.repos[r] && !prev.repos[r].archived) add({ key: `archived:${r}`, type: 'archived', date: today, slug: slugOf[r] });
  }

  const titles = Object.fromEntries(entries.map((e) => [e.slug, e.title]));
  const order = { archived: 0, release: 1, stars: 2, added: 3 } as const;
  const list = [...events.values()]
    .filter((e) => titles[e.slug]) // drop events for entries that were removed
    .sort((a, b) => b.date.localeCompare(a.date) || order[a.type] - order[b.type] || a.key.localeCompare(b.key))
    .slice(0, MAX_EVENTS);

  const state: State = { fetched: new Date().toISOString(), repos: { ...prev.repos, ...result }, events: list, titles };
  await env.GH.put('state', JSON.stringify(state));
  await env.GH.put('history', JSON.stringify(history));
  return `${Object.keys(result).length} of ${repos.length} repos, ${list.length} events`;
}

// ------------------------------------------------------------------ reading

const loadState = (env: GhEnv) => env.GH.get('state', { type: 'json', cacheTtl: 300 }) as Promise<State | null>;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const fmt = (n: number) => n.toLocaleString('en-US');
// 980 -> "980", 1965 -> "2.0k", 52984 -> "53k"
const short = (n: number) => (n < 1000 ? String(n) : n < 10000 ? `${(n / 1000).toFixed(1)}k` : `${Math.round(n / 1000)}k`);

// Feed lines: a day's new entries become one line, and one project's
// releases on one day become one line, so busy repos don't flood the feed.
type Line =
  | { id: string; date: string; kind: 'added'; slugs: string[] }
  | { id: string; date: string; kind: 'release'; slug: string; tags: string[]; url: string }
  | { id: string; date: string; kind: 'stars'; slug: string; stars: number }
  | { id: string; date: string; kind: 'archived'; slug: string };

function lines(events: Event[], { limit = Infinity, onePerProject = false } = {}): Line[] {
  const out: Line[] = [];
  const grouped = new Map<string, Line>();
  for (const e of events) {
    if (e.type === 'added' || e.type === 'release') {
      const k = e.type === 'added' ? `added:${e.date}` : `release:${e.date}:${e.slug}`;
      const l = grouped.get(k);
      if (l?.kind === 'added') { l.slugs.push(e.slug); continue; }
      if (l?.kind === 'release' && e.type === 'release') { l.tags.push(e.tag); continue; }
      const n: Line = e.type === 'added'
        ? { id: k, date: e.date, kind: 'added', slugs: [e.slug] }
        : { id: k, date: e.date, kind: 'release', slug: e.slug, tags: [e.tag], url: e.url };
      grouped.set(k, n);
      out.push(n);
    } else if (e.type === 'stars') {
      out.push({ id: e.key, date: e.date, kind: 'stars', slug: e.slug, stars: e.stars });
    } else {
      out.push({ id: e.key, date: e.date, kind: 'archived', slug: e.slug });
    }
  }
  let res = out;
  if (onePerProject) {
    const seen = new Set<string>();
    res = out.filter((l) => l.kind === 'added' || (!seen.has(l.slug) && !!seen.add(l.slug)));
  }
  return res.slice(0, limit);
}

const LABEL = { added: 'new', release: 'release', stars: 'stars', archived: 'archived' } as const;
const anchor = (id: string) => id.replace(/[^\w-]/g, '-');

function feedHtml(s: State, opts: { limit?: number; onePerProject?: boolean; names?: number }): string {
  const names = opts.names ?? Infinity;
  const link = (slug: string) => `<a href="/p/${slug}/">${esc(s.titles[slug])}</a>`;
  const ext = (url: string, text: string) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(text)} ↗</a>`;
  const items = lines(s.events, opts).map((l) => {
    let body: string;
    if (l.kind === 'added') {
      body = (l.slugs.length === 1 ? 'New entry: ' : `${l.slugs.length} new entries: `)
        + l.slugs.slice(0, names).map(link).join(', ')
        + (l.slugs.length > names ? `<span class="dim"> and ${l.slugs.length - names} more</span>` : '');
    } else if (l.kind === 'release') {
      body = `${link(l.slug)} released ${ext(l.url, l.tags[0])}`
        + (l.tags.length > 1 ? `<span class="dim"> and ${l.tags.length - 1} more that day</span>` : '');
    } else if (l.kind === 'stars') {
      body = `${link(l.slug)} passed ${fmt(l.stars)} GitHub stars`;
    } else {
      body = `${link(l.slug)}: the repo was archived on GitHub, so it may no longer be maintained`;
    }
    return `<li id="${anchor(l.id)}"><span class="when">${l.date}</span><span class="ftag k-${l.kind}">${LABEL[l.kind]}</span><p>${body}</p></li>`;
  });
  return items.length ? `<ol class="feed">${items.join('')}</ol>` : '<p class="dim">Nothing yet.</p>';
}

// Homepage ticker: one short line per item, the list twice so the CSS loop
// is seamless (the copy is hidden from screen readers and the tab order).
function ago(date: string, now: number): string {
  const d = Math.floor((now - Date.parse(`${date}T12:00:00Z`)) / 86400000);
  return d <= 0 ? 'today' : d < 14 ? `${d}d ago` : d < 60 ? `${Math.floor(d / 7)}w ago` : date;
}

function tickerHtml(s: State, now: number): string {
  const ls = lines(s.events, { limit: 20, onePerProject: true });
  if (!ls.length) return '';
  const item = (l: Line, copy: boolean) => {
    const ti = copy ? ' tabindex="-1"' : '';
    const link = (slug: string) => `<a href="/p/${slug}/"${ti}>${esc(s.titles[slug])}</a>`;
    let body: string;
    if (l.kind === 'added') {
      body = l.slugs.slice(0, 2).map(link).join(', ') + (l.slugs.length > 2 ? `<span class="dim"> +${l.slugs.length - 2}</span>` : '');
    } else if (l.kind === 'release') {
      body = `${link(l.slug)} <a class="tk-x" href="${esc(l.url)}" target="_blank" rel="noopener"${ti}>${esc(l.tags[0])}</a>`;
    } else if (l.kind === 'stars') {
      body = `${link(l.slug)} <span class="tk-x">★ ${fmt(l.stars)}</span>`;
    } else {
      body = link(l.slug);
    }
    return `<li><span class="ftag k-${l.kind}">${LABEL[l.kind]}</span>${body}<span class="when">${ago(l.date, now)}</span></li>`;
  };
  const list = (copy: boolean) => `<ul class="tk-list"${copy ? ' aria-hidden="true"' : ''}>${ls.map((l) => item(l, copy)).join('')}</ul>`;
  return `<div class="tk-rail" style="--tk-dur:${ls.length * 6}s">${list(false)}${list(true)}</div>`;
}

// ------------------------------------------------------------------ routes

// Page views: fill the slots. Anything that isn't a 200 HTML page passes through.
export async function fill(res: Response, env: GhEnv): Promise<Response> {
  if (res.status !== 200 || !(res.headers.get('content-type') || '').includes('text/html')) return res;
  const s = await loadState(env);
  if (!s) return res;

  const top = Object.entries(s.repos).filter(([, v]) => !v.archived).sort((a, b) => b[1].stars - a[1].stars).slice(0, TOP).map(([r]) => r);
  const rank = new Map(top.map((r, i) => [r, i] as const));
  const as = new Date(s.fetched).toISOString().slice(0, 10);

  const out = new HTMLRewriter()
    .on('span.stars[data-repo]', {
      element(el) {
        const v = s.repos[el.getAttribute('data-repo')!];
        if (!v) return;
        el.setInnerContent(`★ ${short(v.stars)}`);
        el.setAttribute('title', `${fmt(v.stars)} GitHub stars`);
        el.removeAttribute('hidden');
      },
    })
    .on('dt[data-gh-dt]', {
      element(el) { if (s.repos[el.getAttribute('data-gh-dt')!]) el.removeAttribute('hidden'); },
    })
    .on('dd[data-gh]', {
      element(el) {
        const v = s.repos[el.getAttribute('data-gh')!];
        if (!v) return;
        el.setInnerContent(`${fmt(v.stars)} stars, last commit ${v.pushed}${v.archived ? ', archived (no longer maintained)' : ''}. <span class="dim">As of ${as}. Stars show interest, not safety.</span>`, { html: true });
        el.removeAttribute('hidden');
      },
    })
    .on('[data-group="top"]', {
      element(el) {
        if (!top.length) { el.remove(); return; }
        el.removeAttribute('hidden');
        el.removeAttribute('data-pending');
      },
    })
    .on('li[data-top]', {
      element(el) {
        const i = rank.get(el.getAttribute('data-top')!);
        if (i === undefined) { el.remove(); return; }
        el.setAttribute('style', `order:${i}`);
      },
    })
    .on('[data-ticker]', {
      element(el) {
        const html = tickerHtml(s, Date.now());
        if (!html) { el.remove(); return; }
        el.removeAttribute('hidden');
        el.removeAttribute('data-ticker');
      },
    })
    .on('[data-activity="ticker"]', {
      element(el) { el.setInnerContent(tickerHtml(s, Date.now()), { html: true }); },
    })
    .on('[data-activity]:not([data-activity="ticker"])', {
      element(el) {
        const full = el.getAttribute('data-activity') === 'full';
        el.setInnerContent(feedHtml(s, full ? {} : { limit: 10, onePerProject: true, names: 3 }), { html: true });
      },
    })
    .on('[data-activity-updated]', { element(el) { el.setInnerContent(as); } })
    .transform(res);

  // The body changed, so the asset's ETag no longer describes it.
  const h = new Headers(out.headers);
  h.delete('etag');
  h.set('cache-control', 'public, max-age=0, must-revalidate');
  return new Response(out.body, { status: out.status, headers: h });
}

export async function activityXml(env: GhEnv): Promise<Response> {
  const s = await loadState(env);
  const t = (slug: string) => s!.titles[slug];
  const items = s ? lines(s.events, { limit: 100 }).map((l) => {
    let title: string, link: string;
    if (l.kind === 'added') {
      title = l.slugs.length === 1 ? `New entry: ${t(l.slugs[0])}` : `${l.slugs.length} new entries: ${l.slugs.map(t).join(', ')}`;
      link = l.slugs.length === 1 ? `${SITE}/p/${l.slugs[0]}/` : `${SITE}/activity/`;
    } else if (l.kind === 'release') {
      title = `${t(l.slug)} released ${l.tags[0]}${l.tags.length > 1 ? ` (and ${l.tags.length - 1} more that day)` : ''}`;
      link = l.url;
    } else if (l.kind === 'stars') {
      title = `${t(l.slug)} passed ${fmt(l.stars)} GitHub stars`;
      link = `${SITE}/p/${l.slug}/`;
    } else {
      title = `${t(l.slug)}: repo archived on GitHub`;
      link = `${SITE}/p/${l.slug}/`;
    }
    return `<item><title>${esc(title)}</title><link>${esc(link)}</link><guid isPermaLink="false">${SITE}/activity/#${anchor(l.id)}</guid><pubDate>${new Date(`${l.date}T12:00:00Z`).toUTCString()}</pubDate></item>`;
  }).join('') : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>unshittify: what's happening</title><link>${SITE}/activity/</link><atom:link href="${SITE}/activity.xml" rel="self" type="application/rss+xml"/><description>New releases, GitHub star milestones and new entries across the projects on unshittify.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8', 'cache-control': 'public, max-age=900' } });
}

export async function starsJson(env: GhEnv): Promise<Response> {
  const s = await loadState(env);
  const body = { source: SITE, fetched: s?.fetched ?? null, note: 'GitHub stars per repo, refreshed hourly. Stars show interest, not safety.', repos: s?.repos ?? {} };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'cache-control': 'public, max-age=900' },
  });
}
