import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project. The filename is the URL slug: /p/<slug>.
// Frontmatter holds the structured fields; the body is the write-up.
// Contributor submissions will produce files in this same shape.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    id: z.number().int().positive(),
    title: z.string(),
    // Optional search title for the <title> tag; defaults to "title: device".
    seoTitle: z.string().optional(),
    device: z.string(),
    category: z.enum(['tv', 'make', 'home', 'audio', 'computer', 'vehicle']),
    ai: z.string(),
    evidence: z.enum(['public', 'report', 'experimental']),
    aiRole: z.string(),
    caveats: z.string(),
    evidenceNote: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).min(1),
    reviewed: z.coerce.date(),
    // Who added the entry. "unshittify" for editorial entries; a member handle later.
    submittedBy: z.string().default('unshittify'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
