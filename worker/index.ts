// Cloudflare Worker in front of the static site.
// Static files are served by the assets layer; only /api/* reaches this code
// (see run_worker_first in wrangler.jsonc).

interface Env {
  ASSETS: Fetcher;
  SUBMISSIONS: SendEmail;
  FROM_ADDRESS: string;
  TO_ADDRESS: string;
}

const FIELDS = [
  ['kind', 'type'],
  ['entry', 'entry'],
  ['project', 'project'],
  ['device', 'device'],
  ['problem', 'problem'],
  ['changed', 'changed / correction'],
  ['works', 'works'],
  ['broken', 'still broken'],
  ['source', 'source'],
  ['ai', 'ai'],
  ['risks', 'risks'],
  ['credit', 'credit'],
  ['email', 'email'],
] as const;

const MAX = 4000;

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/api/submit') return submit(req, env);
    if (url.pathname.startsWith('/api/')) return json({ error: 'not found' }, 404);
    return env.ASSETS.fetch(req);
  },
} satisfies ExportedHandler<Env>;

async function submit(req: Request, env: Env): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);
  const wantsJson = (req.headers.get('accept') || '').includes('application/json');
  const done = (ok: boolean, error?: string, status = 400) =>
    wantsJson
      ? json(ok ? { ok: true } : { error }, ok ? 200 : status)
      : Response.redirect(new URL(ok ? '/submitted/' : '/#submit', req.url).toString(), 303);

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return done(false, 'bad request');
  }
  const get = (k: string) => String(form.get(k) ?? '').trim().slice(0, MAX);

  // Bots: honeypot filled, or form sent within 3 seconds of page load. Pretend success.
  const t = Number(get('t'));
  if (get('website') || (t && Date.now() - t < 3000)) return done(true);

  const kind = get('kind') === 'correction' ? 'correction' : 'build';
  if (get('rights') !== 'yes') return done(false, 'please confirm you can share this');
  if (kind === 'build' && (!get('project') || !get('device') || !get('source')))
    return done(false, 'project, device and source link are required');
  if (kind === 'correction' && !get('changed')) return done(false, 'describe the correction');

  const email = get('email');
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;

  const lines = FIELDS.map(([k, label]) => [label, get(k)] as const).filter(([, v]) => v);
  const text = lines.map(([l, v]) => `${l}:\n${v}\n`).join('\n') +
    `\n--\n${new Date().toISOString()} · ${req.headers.get('cf-ipcountry') ?? '??'}\n`;
  const html = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;line-height:1.5">` +
    lines.map(([l, v]) => `<p><b>${esc(l)}</b><br>${esc(v).replace(/\n/g, '<br>')}</p>`).join('') + `</div>`;

  const title = kind === 'build' ? get('project') : `correction: ${get('entry') || 'general'}`;

  try {
    await env.SUBMISSIONS.send({
      to: env.TO_ADDRESS, // binding is also locked to this address in wrangler.jsonc
      from: { email: env.FROM_ADDRESS, name: 'unshitify form' },
      ...(validEmail ? { replyTo: validEmail } : {}),
      subject: `[unshitify] ${title}`.slice(0, 200),
      text,
      html,
    });
  } catch (e) {
    console.error('send failed', e);
    return done(false, 'could not send right now', 502);
  }
  return done(true);
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
