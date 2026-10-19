// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain (used for canonical, OG and sitemap)
  // Overridable for previews (GitHub Pages sets SITE_URL and BASE_PATH in its workflow).
  site: process.env.SITE_URL ?? 'https://icm.example.com',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
