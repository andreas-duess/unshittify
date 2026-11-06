import { getCollection } from 'astro:content';
import { SITE } from '../lib/meta';
import { repoInfo } from '../lib/stars';

// The log as CSV, one row per entry, for spreadsheets. Same data as
// projects.json, flattened: links become "label url" pairs joined by " | ".
// Published under CC BY 4.0, see https://github.com/andreas-duess/unshittify-data
const COLS = ['id', 'slug', 'url', 'title', 'device', 'category', 'ai', 'evidence', 'aiRole', 'caveats', 'evidenceNote', 'repo', 'stars', 'links', 'reviewed', 'submittedBy', 'summary'] as const;
const cell = (v: unknown) => {
  const s = String(v ?? '');
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export async function GET() {
  const items = (await getCollection('projects', (p) => !p.data.draft)).sort((a, b) => a.data.id - b.data.id);
  const rows = items.map((p) => {
    const d = p.data;
    const r: Record<(typeof COLS)[number], unknown> = {
      id: d.id, slug: p.id, url: `${SITE}/p/${p.id}/`, title: d.title, device: d.device, category: d.category,
      ai: d.ai, evidence: d.evidence, aiRole: d.aiRole, caveats: d.caveats, evidenceNote: d.evidenceNote,
      repo: d.repo, stars: repoInfo(d.repo)?.stars,
      links: d.links.map((l) => `${l.label} ${l.url}`).join(' | '),
      reviewed: d.reviewed.toISOString().slice(0, 10), submittedBy: d.submittedBy,
      summary: (p.body ?? '').trim().split(/\n\s*\n/)[0],
    };
    return COLS.map((c) => cell(r[c])).join(',');
  });
  return new Response([COLS.join(','), ...rows].join('\r\n') + '\r\n', {
    headers: { 'content-type': 'text/csv; charset=utf-8', 'access-control-allow-origin': '*' },
  });
}
