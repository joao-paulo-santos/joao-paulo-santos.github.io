// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// User page served at the apex of joao-paulo-santos.github.io, so no `base` is needed.
export default defineConfig({
  site: 'https://joao-paulo-santos.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Dual-theme code highlighting. CSS in global.css maps the data-theme
    // attribute to the right Shiki variables so highlighting follows the
    // site theme toggle rather than prefers-color-scheme alone.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
