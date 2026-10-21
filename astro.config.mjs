import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://efd-ye.org',
  output: 'static',
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [sitemap()],
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
  },
});
