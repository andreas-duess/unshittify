// GitHub star counts, fetched before each build by scripts/stars.mjs.
// Entries without a `repo:` field, or whose repo the fetch missed, get null.
import data from '../data/stars.json';

type Repo = { stars: number; archived: boolean; pushed: string };
const repos = data.repos as Record<string, Repo>;

export const STARS_FETCHED = data.fetched;

export const repoInfo = (repo?: string): Repo | null => (repo && repos[repo]) || null;

// 980 -> "980", 1965 -> "2.0k", 52984 -> "53k"
export const fmtStars = (n: number) =>
  n < 1000 ? String(n) : n < 10000 ? `${(n / 1000).toFixed(1)}k` : `${Math.round(n / 1000)}k`;
