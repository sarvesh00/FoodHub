// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the deploy workflow.
//  - GitHub Pages (Phase 1): https://sarvesh00.github.io + /FoodHub
//  - AWS / own domain (Phase 2): https://www.yourdomain.in + /
export default defineConfig({
  site: process.env.SITE_URL || 'https://sarvesh00.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
