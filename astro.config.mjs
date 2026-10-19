// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain (used for canonical, OG and sitemap)
  site: 'https://icm.example.com',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
