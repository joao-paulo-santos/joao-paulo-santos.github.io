// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User page served at the apex of joao-paulo-santos.github.io, so no `base` is needed.
export default defineConfig({
  site: 'https://joao-paulo-santos.github.io',
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
