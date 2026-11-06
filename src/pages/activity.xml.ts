import { getCollection } from 'astro:content';
import { SITE } from '../lib/meta';
import { activityLines } from '../lib/activity';

// The activity feed as RSS: one item per line on /activity/.
const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!);

export async function GET() {
  const projects = await getCollection('projects', (p) => !p.data.draft);
  const title = Object.fromEntries(projects.map((p) => [p.id, p.data.title]));
  const lines = activityLines(new Set(Object.keys(title)), { limit: 100 });
  const body = lines.map((l) => {
    let t: string, link: string;
    if (l.kind === 'added') {
      t = l.slugs.length === 1 ? `New entry: ${title[l.slugs[0]]}` : `${l.slugs.length} new entries: ${l.slugs.map((s) => title[s]).join(', ')}`;
      link = l.slugs.length === 1 ? `${SITE}/p/${l.slugs[0]}/` : `${SITE}/activity/`;
    } else if (l.kind === 'release') {
      t = `${title[l.slug]} released ${l.tags[0]}${l.tags.length > 1 ? ` (and ${l.tags.length - 1} more that day)` : ''}`;
      link = l.url;
    } else if (l.kind === 'stars') {
      t = `${title[l.slug]} passed ${l.stars.toLocaleString('en-US')} GitHub stars`;
      link = `${SITE}/p/${l.slug}/`;
    } else {
      t = `${title[l.slug]}: repo archived on GitHub`;
      link = `${SITE}/p/${l.slug}/`;
    }
    const guid = `${SITE}/activity/#${l.id.replace(/[^\w-]/g, '-')}`;
    return `<item><title>${esc(t)}</title><link>${esc(link)}</link><guid isPermaLink="false">${esc(guid)}</guid><pubDate>${new Date(`${l.date}T12:00:00Z`).toUTCString()}</pubDate></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>unshittify: what's happening</title><link>${SITE}/activity/</link><atom:link href="${SITE}/activity.xml" rel="self" type="application/rss+xml"/><description>New releases, GitHub star milestones and new entries across the projects on unshittify.</description><language>en</language>${body}</channel></rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } });
}
