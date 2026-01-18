// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yoursite.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
