// Cloudflare Worker in front of the static site.
// Static files are served by the assets layer; only /api/* reaches this code
// (see run_worker_first in wrangler.jsonc).

interface Env {
  ASSETS: Fetcher;
  SUBMISSIONS: SendEmail;
  FROM_ADDRESS: string;
  TO_ADDRESS: string;
  SUBMIT_LIMITER: RateLimit;
  GLOBAL_LIMITER: RateLimit;
}

const FIELDS = [
  ['kind', 'type'],
  ['entry', 'entry'],
  ['project', 'project'],
  ['device', 'device'],
  ['problem', 'problem'],
  ['changed', 'changed / correction / message'],
  ['works', 'works'],
  ['broken', 'still broken'],
  ['source', 'source'],
  ['ai', 'ai'],
  ['risks', 'risks'],
  ['credit', 'credit'],
  ['email', 'email'],
  ['agent', 'submitted by agent'],
] as const;

const MAX = 4000;

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/api/submit') return submit(req, env);
    if (url.pathname === '/api/geo') return geo(req);
    if (url.pathname.startsWith('/api/')) return json({ error: 'not found' }, 404);
    return env.ASSETS.fetch(req);
  },
} satisfies ExportedHandler<Env>;

async function submit(req: Request, env: Env): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);
  const isJsonBody = (req.headers.get('content-type') || '').includes('application/json');
  const wantsJson = isJsonBody || (req.headers.get('accept') || '').includes('application/json');
  const done = (ok: boolean, error?: string, status = 400) =>
    wantsJson
      ? json(ok ? { ok: true, message: 'received. a human reviews every submission before it goes up.' } : { error }, ok ? 200 : status)
      : Response.redirect(new URL(ok ? '/submitted/' : '/#submit', req.url).toString(), 303);

  // Same limit for people and agents: a few submissions per IP per minute.
  const ip = req.headers.get('cf-connecting-ip') || 'unknown';
  const { success } = await env.SUBMIT_LIMITER.limit({ key: ip });
  if (!success) return done(false, 'too many submissions, try again in a minute', 429);
  // Site-wide cap, so rotating IPs can't flood the inbox either.
  if (!(await env.GLOBAL_LIMITER.limit({ key: 'all' })).success)
    return done(false, 'busy, try again in a minute', 429);
  // Reject oversized bodies before parsing.
  if (Number(req.headers.get('content-length') || 0) > 40_000) return done(false, 'submission too large', 413);

  // Accept the HTML form (form data) and agents (JSON, see /llms.txt).
  let data: Record<string, unknown>;
  try {
    if (isJsonBody) {
      const body = await req.json();
      if (!body || typeof body !== 'object' || Array.isArray(body)) return done(false, 'expected a JSON object');
      data = body as Record<string, unknown>;
      if (data.rights === true) data.rights = 'yes';
      if (!data.agent) data.agent = 'yes (unnamed)';
    } else {
      data = Object.fromEntries((await req.formData()).entries());
    }
  } catch {
    return done(false, 'bad request: send form data or a JSON object');
  }
  const get = (k: string) => String(data[k] ?? '').trim().slice(0, MAX);

  // Bots: honeypot filled, or form sent within 3 seconds of page load. Pretend success.
  const t = Number(get('t'));
  if (get('website') || (t && Date.now() - t < 3000)) return done(true);

  const k = get('kind');
  const kind = k === 'correction' || k === 'message' ? k : 'build';
  if (kind !== 'message' && get('rights') !== 'yes') return done(false, 'please confirm you can share this');
  if (kind === 'build' && (!get('project') || !get('device') || !get('source')))
    return done(false, 'project, device and source link are required');
  if (get('source') && !/^https?:\/\/\S+$/.test(get('source'))) return done(false, 'source must be an http(s) URL');
  if (kind !== 'build' && !get('changed')) return done(false, kind === 'message' ? 'write a message' : 'describe the correction');

  const email = get('email');
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;

  const lines = FIELDS.map(([k, label]) => [label, get(k)] as const).filter(([, v]) => v);
  const text = lines.map(([l, v]) => `${l}:\n${v}\n`).join('\n') +
    `\n--\n${new Date().toISOString()} · ${req.headers.get('cf-ipcountry') ?? '??'}\n`;
  const html = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;line-height:1.5">` +
    lines.map(([l, v]) => `<p><b>${esc(l)}</b><br>${esc(v).replace(/\n/g, '<br>')}</p>`).join('') + `</div>`;

  const spam = spamReasons(lines.map(([, v]) => v).join('\n'));
  const tag = (spam.length ? '[spam?] ' : '') + (get('agent') ? '[unshittify][agent]' : '[unshittify]');
  const title = kind === 'build' ? get('project') : kind === 'message' ? `message${validEmail ? ' from ' + validEmail : ''}` : `correction: ${get('entry') || 'general'}`;

  try {
    await env.SUBMISSIONS.send({
      to: env.TO_ADDRESS, // binding is also locked to this address in wrangler.jsonc
      from: { email: env.FROM_ADDRESS, name: 'unshittify form' },
      ...(validEmail ? { replyTo: validEmail } : {}),
      subject: `${tag} ${title}`.replace(/[\r\n]+/g, ' ').slice(0, 200),
      text: spam.length ? `spam check: ${spam.join(', ')}\n\n${text}` : text,
      html,
    });
  } catch (e) {
    console.error('send failed', e);
    return done(false, 'could not send right now', 502);
  }
  return done(true);
}

// Countries where analytics cookies need opt-in consent: EU, EEA, UK, Switzerland.
const CONSENT_COUNTRIES = new Set([
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL',
  'PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH',
]);

function geo(req: Request): Response {
  const country = String((req as any).cf?.country ?? req.headers.get('cf-ipcountry') ?? '');
  // Unknown country: ask for consent to be safe.
  const consent = !country || country === 'XX' || CONSENT_COUNTRIES.has(country);
  return new Response(JSON.stringify({ consent }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
  });
}

// Cheap content checks. Flagged submissions still arrive, tagged [spam?] in the
// subject, so nothing real is lost; filter that tag in Gmail if it gets noisy.
const SPAM_WORDS = /\b(casino|betting|viagra|cialis|crypto ?(signals|airdrop)|forex|loan|payday|seo (services|agency)|backlinks?|escort|porn|onlyfans|essay writing|buy followers)\b/i;
function spamReasons(all: string): string[] {
  const r: string[] = [];
  const urls = all.match(/https?:\/\//gi)?.length ?? 0;
  if (urls > 6) r.push(`${urls} links`);
  if (SPAM_WORDS.test(all)) r.push('spam keywords');
  if (/<a\s|\[url=/i.test(all)) r.push('html/bbcode links');
  if (all.length > 0 && (all.match(/[A-Z]/g)?.length ?? 0) / all.length > 0.5) r.push('mostly caps');
  return r;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
