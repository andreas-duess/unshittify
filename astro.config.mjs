import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static today. When members and submissions arrive, add the
// @astrojs/cloudflare adapter and mark those routes `prerender = false`.
// The project pages stay static.
export default defineConfig({
  site: 'https://unshitify.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
