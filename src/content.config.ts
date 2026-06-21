import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    status: z.enum(['active', 'paused', 'finished']).default('active'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    cover: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    project: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    type: z.enum(['release', 'progress', 'breaking', 'note']).default('note'),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = { projects, updates, blog };
