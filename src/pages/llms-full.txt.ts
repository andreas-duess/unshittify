import { getCollection } from 'astro:content';
import { CATEGORIES, SITE } from '../lib/meta';

// Every entry as plain text, for AI search engines and agents.
export async function GET() {
  const items = (await getCollection('projects', (p) => !p.data.draft)).sort((a, b) => a.data.id - b.data.id);
  const out = [
    '# unshittify: full project log',
    '',
    `> People reclaiming hardware they own with AI-assisted development and open source. ${items.length} entries. Source: ${SITE}. Submission instructions: ${SITE}/llms.txt`,
    '',
    ...items.flatMap((p) => {
      const d = p.data;
      return [
        `## ${d.title}`,
        '',
        `- URL: ${SITE}/p/${p.id}`,
        `- Device: ${d.device}`,
        `- Category: ${CATEGORIES[d.category]}`,
        `- AI: ${d.ai}`,
        `- Evidence: ${d.evidence} (${d.evidenceNote})`,
        `- Reviewed: ${d.reviewed.toISOString().slice(0, 10)}`,
        '',
        (p.body ?? '').trim(),
        '',
        `AI role: ${d.aiRole}`,
        '',
        `Caveats: ${d.caveats}`,
        '',
        `Sources: ${d.links.map((l) => `${l.label} ${l.url}`).join(' · ')}`,
        '',
      ];
    }),
  ].join('\n');
  return new Response(out, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
