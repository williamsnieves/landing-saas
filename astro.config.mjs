// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/landing-saas',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'pt', 'fr', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro's bundled Vite and TailwindCSS
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
