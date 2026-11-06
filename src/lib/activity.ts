// The activity feed, from src/data/activity.json (written by scripts/github.mjs).
// Raw events are grouped into lines so busy repos don't flood the feed:
// a day's new entries become one line, and one project's releases on one day
// become one line.
import data from '../data/activity.json';

type Event = { key: string; type: 'added' | 'release' | 'stars' | 'archived'; date: string; slug: string; tag?: string; url?: string; stars?: number };

export type Line =
  | { id: string; date: string; kind: 'added'; slugs: string[] }
  | { id: string; date: string; kind: 'release'; slug: string; tags: string[]; url: string }
  | { id: string; date: string; kind: 'stars'; slug: string; stars: number }
  | { id: string; date: string; kind: 'archived'; slug: string };

export const ACTIVITY_UPDATED = data.updated;

// `known` is the set of published slugs; events for anything else are dropped.
// `onePerProject` keeps only a project's newest line (for the homepage).
export function activityLines(known: Set<string>, { limit = Infinity, onePerProject = false } = {}): Line[] {
  const lines: Line[] = [];
  const byKey = new Map<string, Line>();
  for (const e of (data.events as Event[]).filter((e) => known.has(e.slug))) {
    if (e.type === 'added' || e.type === 'release') {
      const k = e.type === 'added' ? `added:${e.date}` : `release:${e.date}:${e.slug}`;
      const l = byKey.get(k);
      if (l?.kind === 'added') { l.slugs.push(e.slug); continue; }
      if (l?.kind === 'release') { l.tags.push(e.tag!); continue; }
      const n: Line = e.type === 'added'
        ? { id: k, date: e.date, kind: 'added', slugs: [e.slug] }
        : { id: k, date: e.date, kind: 'release', slug: e.slug, tags: [e.tag!], url: e.url! };
      byKey.set(k, n);
      lines.push(n);
    } else if (e.type === 'stars') {
      lines.push({ id: e.key, date: e.date, kind: 'stars', slug: e.slug, stars: e.stars! });
    } else {
      lines.push({ id: e.key, date: e.date, kind: 'archived', slug: e.slug });
    }
  }
  let out = lines;
  if (onePerProject) {
    const seen = new Set<string>();
    out = lines.filter((l) => {
      if (l.kind === 'added') return true;
      if (seen.has(l.slug)) return false;
      seen.add(l.slug);
      return true;
    });
  }
  return out.slice(0, limit);
}

export const KIND_LABEL = { added: 'new', release: 'release', stars: 'stars', archived: 'archived' } as const;
