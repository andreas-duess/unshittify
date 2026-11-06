import { getCollection } from 'astro:content';
import { SITE } from '../lib/meta';
import { repoInfo } from '../lib/stars';

// Machine-readable log. Same fields as the markdown frontmatter.
export async function GET() {
  const items = (await getCollection('projects', (p) => !p.data.draft)).sort((a, b) => a.data.id - b.data.id);
  const data = items.map((p) => ({
    slug: p.id,
    url: `${SITE}/p/${p.id}/`,
    ...p.data,
    reviewed: p.data.reviewed.toISOString().slice(0, 10),
    stars: repoInfo(p.data.repo)?.stars ?? null,
    summary: (p.body ?? '').trim().split(/\n\s*\n/)[0],
  }));
  return new Response(JSON.stringify({ source: SITE, count: data.length, projects: data }, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' },
  });
}
