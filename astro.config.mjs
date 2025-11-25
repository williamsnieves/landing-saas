// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/landing-saas',
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro's bundled Vite and TailwindCSS
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
});
