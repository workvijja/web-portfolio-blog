// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const sitemapConfig = sitemap({
  chunks: {
    blogs: (item) => {
      if (/\/blogs\/.+/.test(item.url)) return item
    }
  }
})

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemapConfig],

  vite: {
    plugins: [tailwindcss()]
  }
});