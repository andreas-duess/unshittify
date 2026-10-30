import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// After the build, make every link that leaves the site open in a new tab.
// Internal links stay in the same tab.
function externalLinksNewTab() {
  return {
    name: 'external-links-new-tab',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const walk = async (d) => (await readdir(d, { withFileTypes: true })).flatMap((e) => [join(d, e.name), e]).length
          ? (await Promise.all((await readdir(d, { withFileTypes: true })).map((e) => e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]))).flat()
          : [];
        for (const file of (await walk(root)).filter((f) => f.endsWith('.html'))) {
          const html = await readFile(file, 'utf8');
          const out = html.replace(/<a\s([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/g, (m, pre, href, post) => {
            if (/^https?:\/\/(www\.)?unshittify\.dev/.test(href)) return m;
            const attrs = (pre + post).replace(/\s*(target|rel)="[^"]*"/g, '');
            return `<a ${attrs.trim()} href="${href}" target="_blank" rel="noopener">`.replace('<a  ', '<a ');
          });
          if (out !== html) await writeFile(file, out);
        }
      },
    },
  };
}

// Static today. When members and submissions arrive, add the
// @astrojs/cloudflare adapter and mark those routes `prerender = false`.
// The project pages stay static.
export default defineConfig({
  site: 'https://unshittify.dev',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/submitted') }), externalLinksNewTab()],
});
