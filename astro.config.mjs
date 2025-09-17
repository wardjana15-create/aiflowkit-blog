import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  site: 'https://aiflowkit.xyz',
  integrations: [
    mdx(),
    sitemap(),
    rss({
      title: 'AI FlowKit Blog',
      description: 'A blog about AI-powered personal productivity tools.',
      customData: `<language>en-us</language>`,
    }),
  ],
});

