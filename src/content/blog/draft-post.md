---
title: Draft Post — Should Not Appear in Production
description: Verifies the draft filter works.
pubDate: 2026-06-25
tags:
  - meta
draft: true
---

This post has `draft: true` in its frontmatter. It should appear in
`npm run dev` so you can preview it, but `npm run build` (and therefore the
deployed site) must exclude it.
