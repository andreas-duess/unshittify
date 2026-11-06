// GitHub data for every entry with a `repo:` field, run before each build
// (deploy.sh does). Writes three files in src/data/:
//   stars.json          current stars, archived flag, last push (read by the build)
//   stars-history.json  one dated snapshot of star counts per day
//   activity.json       the activity feed: new entries, releases, star
//                       milestones, archived repos. New events merge into the
//                       old ones, so nothing drops off when GitHub's list moves on.
// On a GitHub failure it leaves the files alone and exits 0, so a deploy
// never breaks on the API.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/content/projects');
const data = (f) => join(root, 'src/data', f);
const readJson = (f, fallback) => (existsSync(data(f)) ? JSON.parse(readFileSync(data(f), 'utf8')) : fallback);

const MILESTONES = [100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000];
const RELEASE_DAYS = 90; // how far back to look for releases on each run
const MAX_EVENTS = 400;

// Entries: slug, repo, draft flag, and the date the file first landed in git.
const entries = readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
  const t = readFileSync(join(dir, f), 'utf8');
  let added = '';
  try { added = execSync(`git log --diff-filter=A --format=%cs -- "${join(dir, f)}"`, { cwd: root, encoding: 'utf8' }).trim().split('\n').pop(); } catch {}
  return {
    slug: f.slice(0, -3),
    repo: t.match(/^repo:\s*"?([\w.-]+\/[\w.-]+)"?\s*$/m)?.[1],
    draft: /^draft:\s*true\s*$/m.test(t),
    added,
  };
}).filter((e) => !e.draft);
const slugOf = Object.fromEntries(entries.filter((e) => e.repo).map((e) => [e.repo, e.slug]));
const repos = Object.keys(slugOf);

let token = process.env.GITHUB_TOKEN;
if (!token) { try { token = execSync('gh auth token', { encoding: 'utf8' }).trim(); } catch {} }
if (!token) { console.warn('github: no GITHUB_TOKEN and no gh login, keeping old data'); process.exit(0); }

// One GraphQL query per 40 repos, each repo as an aliased field.
const result = {};
const releases = {};
try {
  for (let i = 0; i < repos.length; i += 40) {
    const chunk = repos.slice(i, i + 40);
    const fields = chunk.map((r, j) => {
      const [o, n] = r.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) {
        stargazerCount isArchived pushedAt
        releases(first: 5, orderBy: { field: CREATED_AT, direction: DESC }) { nodes { tagName publishedAt url isPrerelease isDraft } }
      }`;
    }).join('\n');
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { authorization: `bearer ${token}`, 'content-type': 'application/json', 'user-agent': 'unshittify-build' },
      body: JSON.stringify({ query: `{ ${fields} }` }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { data: d } = await res.json();
    chunk.forEach((r, j) => {
      const x = d?.[`r${j}`];
      if (!x) { console.warn(`github: ${r} not found`); return; }
      result[r] = { stars: x.stargazerCount, archived: x.isArchived, pushed: x.pushedAt.slice(0, 10) };
      releases[r] = x.releases.nodes.filter((n) => !n.isDraft && !n.isPrerelease && n.publishedAt);
    });
  }
} catch (e) {
  console.warn(`github: request failed (${e.message}), keeping old data`);
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const prev = readJson('stars.json', { repos: {} }).repos;

// Star snapshots, one per day.
const history = readJson('stars-history.json', {});
history[today] = Object.fromEntries(Object.entries(result).map(([r, v]) => [r, v.stars]));
const days = Object.keys(history).sort();

// Activity: rebuild what can be derived, then merge with what was kept before.
const events = new Map(readJson('activity.json', { events: [] }).events.map((e) => [e.key, e]));
const add = (e) => { if (!events.has(e.key)) events.set(e.key, e); };

for (const e of entries) if (e.added) add({ key: `added:${e.slug}`, type: 'added', date: e.added, slug: e.slug });

const since = new Date(Date.now() - RELEASE_DAYS * 864e5).toISOString().slice(0, 10);
for (const [r, list] of Object.entries(releases)) {
  for (const n of list) {
    const date = n.publishedAt.slice(0, 10);
    if (date >= since) add({ key: `release:${r}:${n.tagName}`, type: 'release', date, slug: slugOf[r], tag: n.tagName, url: n.url });
  }
}

// Milestones: a count crossing a threshold between two consecutive snapshots.
// The first snapshot has nothing before it, so it never produces one.
for (let i = 1; i < days.length; i++) {
  const a = history[days[i - 1]], b = history[days[i]];
  for (const [r, now] of Object.entries(b)) {
    const before = a[r];
    if (before === undefined || !slugOf[r]) continue;
    for (const m of MILESTONES) if (before < m && now >= m) add({ key: `stars:${r}:${m}`, type: 'stars', date: days[i], slug: slugOf[r], stars: m });
  }
}

for (const [r, v] of Object.entries(result)) {
  if (v.archived && prev[r] && !prev[r].archived) add({ key: `archived:${r}`, type: 'archived', date: today, slug: slugOf[r] });
}

const order = { archived: 0, release: 1, stars: 2, added: 3 };
const list = [...events.values()]
  .sort((a, b) => b.date.localeCompare(a.date) || order[a.type] - order[b.type] || a.key.localeCompare(b.key))
  .slice(0, MAX_EVENTS);

writeFileSync(data('stars.json'), JSON.stringify({ fetched: today, repos: result }, null, 2) + '\n');
writeFileSync(data('stars-history.json'), JSON.stringify(history) + '\n');
writeFileSync(data('activity.json'), JSON.stringify({ updated: today, events: list }, null, 1) + '\n');
const count = (t) => list.filter((e) => e.type === t).length;
console.log(`github: ${Object.keys(result).length} of ${repos.length} repos; activity ${list.length} events (${count('release')} releases, ${count('stars')} milestones, ${count('added')} entries, ${count('archived')} archived)`);
