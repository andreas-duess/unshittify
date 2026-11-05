import { getCollection } from 'astro:content';
import { SITE, pageTitle } from '../lib/meta';

const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!);

export async function GET() {
  const items = (await getCollection('projects', (p) => !p.data.draft)).sort((a, b) => b.data.id - a.data.id);
  const body = items.map((p) => {
    const d = p.data;
    const summary = (p.body ?? '').trim().split(/\n\s*\n/)[0];
    return `<item><title>${esc(pageTitle(d))}</title><link>${SITE}/p/${p.id}/</link><guid isPermaLink="true">${SITE}/p/${p.id}/</guid><pubDate>${d.reviewed.toUTCString()}</pubDate><description>${esc(`${summary} AI: ${d.aiRole} Caveats: ${d.caveats}`)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>unshittify</title><link>${SITE}</link><atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/><description>New entries: people reclaiming hardware they own with AI-assisted development and open source.</description><language>en</language>${body}</channel></rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } });
}
