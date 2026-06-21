// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User page served at the apex of joao-paulo-santos.github.io, so no `base` is needed.
export default defineConfig({
  site: 'https://joao-paulo-santos.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
