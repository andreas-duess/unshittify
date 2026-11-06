// The date each entry's file first landed in git, by slug. Published in
// projects.json as `added`; the worker's activity feed uses it for "new entry".
import { execSync } from 'node:child_process';

let cache: Record<string, string> | null = null;

export function addedDates(): Record<string, string> {
  if (cache) return cache;
  cache = {};
  try {
    // Oldest first, so a later re-add never overwrites the first date.
    const out = execSync('git log --reverse --diff-filter=A --name-only --format=@%cs -- src/content/projects', { encoding: 'utf8' });
    let date = '';
    for (const line of out.split('\n')) {
      if (line.startsWith('@')) date = line.slice(1);
      else if (line.endsWith('.md')) {
        const slug = line.split('/').pop()!.slice(0, -3);
        cache[slug] ??= date;
      }
    }
  } catch {}
  return cache;
}
