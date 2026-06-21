---
title: Why I Moved to Astro
description: Notes on dropping the React SPA in favor of a static-first framework.
pubDate: 2026-06-15
tags:
  - astro
  - web
  - meta
---

The previous version of this site was a React + Vite single-page app. It
worked, but it was the wrong shape for a content site: every route had to be
resolved client-side, SEO was weaker than it should have been, and the hash
router needed for GitHub Pages made URLs ugly.

## What changed

[Astro](https://astro.build) builds the whole site to static HTML at compile
time. Each route is a real file on disk with a real URL. Markdown content
lives in typed collections, so frontmatter is validated and editors can
autocomplete it.

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

## What I kept

React isn't gone entirely — Astro lets you drop in framework components as
islands when you actually need them. For now, the theme toggle is a 10-line
vanilla script and that's all the JavaScript the whole site ships.

The result is a site that's faster to load, easier to maintain, and simpler
to deploy.
