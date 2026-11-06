// Cloudflare Worker in front of the static site.
// Static files are served by the assets layer. This code sees /api/*, plus the
// pages and feeds that carry live GitHub data (see run_worker_first in
// wrangler.jsonc and worker/github.ts). An hourly cron refreshes that data.
import { refresh, fill, activityXml, starsJson, type GhEnv } from './github';

interface Env extends GhEnv {
  ASSETS: Fetcher;
  SUBMISSIONS: SendEmail;
  FROM_ADDRESS: string;
  TO_ADDRESS: string;
  SUBMIT_LIMITER: RateLimit;
  GLOBAL_LIMITER: RateLimit;
  // Newsletter (Resend). Secrets: RESEND_API_KEY, SUBSCRIBE_SECRET. Var: NEWSLETTER_AUDIENCE.
  RESEND_API_KEY: string;
  SUBSCRIBE_SECRET: string;
  NEWSLETTER_AUDIENCE: string;
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
    if (url.pathname === '/api/subscribe') return subscribe(req, env);
    if (url.pathname === '/api/confirm') return confirm(req, env);
    if (url.pathname.startsWith('/api/')) return json({ error: 'not found' }, 404);
    if (url.pathname === '/activity.xml') return activityXml(env);
    if (url.pathname === '/stars.json') return starsJson(env);
    // Pages with GitHub slots (see run_worker_first): fill them on the way out.
    return fill(await env.ASSETS.fetch(req), env);
  },
  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(refresh(env).then((m) => console.log(`github refresh: ${m}`), (e) => console.error(`github refresh failed: ${e}`)));
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


// ---------------------------------------------------------------- newsletter
// Confirmed opt-in without a database: the confirm link carries the email,
// a timestamp and an HMAC of both. Only a click on that link adds the address
// to the Resend audience. Weekly sends happen from the Mac Mini, not here.

const POSTAL = 'Unshittify, 30 Adelaide Street East, 12th floor, Toronto, ON, Canada';
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DAY = 86_400_000;

async function hmac(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(msg)));
  return btoa(String.fromCharCode(...sig)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function resend(env: Env, path: string, body: unknown): Promise<Response> {
  return fetch(`https://api.resend.com${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'User-Agent': 'unshittify-worker/1.0' },
    body: JSON.stringify(body),
  });
}

async function subscribe(req: Request, env: Env): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);
  const wantsJson = (req.headers.get('accept') || '').includes('application/json');
  const done = (ok: boolean, error?: string, status = 400) =>
    wantsJson ? json(ok ? { ok: true } : { error }, ok ? 200 : status)
      : Response.redirect(new URL(ok ? '/subscribe-sent/' : '/#subscribe', req.url).toString(), 303);

  const ip = req.headers.get('cf-connecting-ip') || 'unknown';
  if (!(await env.SUBMIT_LIMITER.limit({ key: 'sub:' + ip })).success) return done(false, 'too many tries, wait a minute', 429);
  if (!(await env.GLOBAL_LIMITER.limit({ key: 'sub' })).success) return done(false, 'busy, try again in a minute', 429);

  let data: Record<string, string>;
  try {
    data = Object.fromEntries([...(await req.formData()).entries()].map(([k, v]) => [k, String(v)]));
  } catch {
    return done(false, 'bad request');
  }
  const email = (data.email || '').trim().toLowerCase().slice(0, 200);
  if (data.website) return done(true); // honeypot: pretend success
  if (!EMAIL_OK.test(email)) return done(false, 'that email address looks wrong');

  const ts = String(Date.now());
  const sig = await hmac(env.SUBSCRIBE_SECRET, `${email}|${ts}`);
  const link = new URL('/api/confirm', req.url);
  link.search = new URLSearchParams({ e: email, ts, s: sig }).toString();

  const text = [
    'Confirm your subscription to unshittify weekly.',
    '',
    'One email a week with the new projects on unshittify.dev: people making hardware they own useful again. No email in weeks with nothing new.',
    '',
    `Confirm: ${link}`,
    '',
    "If you didn't ask for this, ignore this email and you won't hear from us again.",
    '',
    '--',
    POSTAL,
  ].join('\n');
  const html = `<div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;line-height:1.6;color:#121314;max-width:560px">
<p><b>Confirm your subscription to unshittify weekly.</b></p>
<p>One email a week with the new projects on unshittify.dev: people making hardware they own useful again. No email in weeks with nothing new.</p>
<p><a href="${esc(link.toString())}" style="display:inline-block;background:#d9500b;color:#fff;padding:10px 16px;text-decoration:none">confirm subscription</a></p>
<p style="color:#62666c">If you didn't ask for this, ignore this email and you won't hear from us again.</p>
<p style="color:#62666c;font-size:12px">${esc(POSTAL)}</p></div>`;

  const r = await resend(env, '/emails', {
    from: 'unshittify <hello@unshittify.dev>',
    to: [email],
    subject: 'Confirm: unshittify weekly',
    text,
    html,
  });
  if (!r.ok) {
    console.error('confirm email failed', r.status, await r.text());
    return done(false, 'could not send the confirmation email right now', 502);
  }
  return done(true);
}

async function confirm(req: Request, env: Env): Promise<Response> {
  const u = new URL(req.url);
  const email = (u.searchParams.get('e') || '').toLowerCase();
  const ts = u.searchParams.get('ts') || '';
  const s = u.searchParams.get('s') || '';
  const back = (path: string) => Response.redirect(new URL(path, req.url).toString(), 303);
  if (!EMAIL_OK.test(email) || !/^\d+$/.test(ts) || Date.now() - Number(ts) > 7 * DAY) return back('/subscribe-expired/');
  if ((await hmac(env.SUBSCRIBE_SECRET, `${email}|${ts}`)) !== s) return back('/subscribe-expired/');
  const r = await resend(env, `/audiences/${env.NEWSLETTER_AUDIENCE}/contacts`, { email, unsubscribed: false });
  if (!r.ok && r.status !== 409) {
    console.error('add contact failed', r.status, await r.text());
    return back('/subscribe-expired/');
  }
  return back('/subscribed/');
}
