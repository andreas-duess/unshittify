// Fetch GitHub star counts for every entry with a `repo:` field.
// Writes src/data/stars.json (current counts, read by the build) and adds a
// dated snapshot to src/data/stars-history.json (for a "rising" list later).
// Run before each build (deploy.sh does). On any failure it leaves the old
// files alone and exits 0, so a deploy never breaks on the GitHub API.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/content/projects');
const out = join(root, 'src/data/stars.json');
const hist = join(root, 'src/data/stars-history.json');

const repos = [...new Set(readdirSync(dir).filter((f) => f.endsWith('.md'))
  .map((f) => readFileSync(join(dir, f), 'utf8').match(/^repo:\s*"?([\w.-]+\/[\w.-]+)"?\s*$/m)?.[1])
  .filter(Boolean))];

let token = process.env.GITHUB_TOKEN;
if (!token) { try { token = execSync('gh auth token', { encoding: 'utf8' }).trim(); } catch {} }
if (!token) { console.warn('stars: no GITHUB_TOKEN and no gh login, keeping old counts'); process.exit(0); }

// One GraphQL query per 50 repos, each repo as an aliased field.
const result = {};
try {
  for (let i = 0; i < repos.length; i += 50) {
    const chunk = repos.slice(i, i + 50);
    const fields = chunk.map((r, j) => {
      const [o, n] = r.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) { nameWithOwner stargazerCount isArchived pushedAt }`;
    }).join('\n');
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { authorization: `bearer ${token}`, 'content-type': 'application/json', 'user-agent': 'unshittify-build' },
      body: JSON.stringify({ query: `{ ${fields} }` }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { data } = await res.json();
    chunk.forEach((r, j) => {
      const d = data?.[`r${j}`];
      if (!d) { console.warn(`stars: ${r} not found`); return; }
      result[r] = { stars: d.stargazerCount, archived: d.isArchived, pushed: d.pushedAt.slice(0, 10) };
    });
  }
} catch (e) {
  console.warn(`stars: GitHub request failed (${e.message}), keeping old counts`);
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(out, JSON.stringify({ fetched: today, repos: result }, null, 2) + '\n');
const history = existsSync(hist) ? JSON.parse(readFileSync(hist, 'utf8')) : {};
history[today] = Object.fromEntries(Object.entries(result).map(([r, v]) => [r, v.stars]));
writeFileSync(hist, JSON.stringify(history) + '\n');
console.log(`stars: ${Object.keys(result).length} of ${repos.length} repos`);
