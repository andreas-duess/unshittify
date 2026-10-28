# unshitify.com

A log of people reclaiming hardware with AI-assisted development and open source.

Astro 5, static output. JetBrains Mono, self-hosted. No client JS beyond search and filter. No cookies, no analytics.

## Run

    npm install
    npm run dev      # localhost:4321
    npm run build    # -> dist/

## Content

One file per project in `src/content/projects/<slug>.md`. The filename is the URL: `/p/<slug>`.
Frontmatter schema lives in `src/content.config.ts`; a build fails on a missing or wrong field.
The body is the write-up. The log shows its first paragraph; the project page shows all of it.
`draft: true` hides an entry. `submittedBy` is "unshitify" for editorial entries.

Categories, evidence labels, snapshot date and the submit address: `src/lib/meta.ts`.

## Hosting

Cloudflare Worker with static assets, andreas@duess.com Cloudflare account. `wrangler.jsonc` holds the config.
`npm run build && npx wrangler deploy`. Local test with the form working: `npm run build && npx wrangler dev`.

## Submit form

`worker/index.ts` handles `POST /api/submit` and emails the submission to the address in `wrangler.jsonc`
(send_email binding, locked to one verified destination; free on any plan). The address never reaches the page.
Needs Email Routing on unshitify.com with that address verified. Spam guards: honeypot field and a 3-second minimum.
Add Turnstile if spam gets through.

## Planned: members and contributor pages

Shape decided, not built:

- **Runtime:** add `@astrojs/cloudflare`. Project pages stay prerendered; only `/account`, `/submit` and `/api/*` run on demand.
- **Data:** D1 for members, submissions and their review status. Markdown files stay the source of truth for published entries.
- **Auth:** GitHub OAuth first (the audience has accounts). Member handle fills `submittedBy`.
- **Flow:** member submits a build through a form, it lands in D1 as `pending`, editor approves, approval writes the markdown file (commit via GitHub API) and the site rebuilds.
- **Member-only:** a `visibility` field on entries if some content goes behind login.
