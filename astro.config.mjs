import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://yourusername.github.io',
  base: '/Tshikhuthula-School',
  integrations: [sitemap()],
  vite: {
    define: {
      global: 'globalThis'
    },
    build: {
      assetsDir: 'assets'
    }
  }
});