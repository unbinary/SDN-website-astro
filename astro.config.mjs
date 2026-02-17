// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sdnetwork.ca',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://sdnetwork.ca/',
        'https://sdnetwork.ca/about/',
        'https://sdnetwork.ca/advertisers/',
        'https://sdnetwork.ca/advertisers/national/',
        'https://sdnetwork.ca/advertisers/local/',
        'https://sdnetwork.ca/venues/',
        'https://sdnetwork.ca/venues/arenas/',
        'https://sdnetwork.ca/venues/golf/',
        'https://sdnetwork.ca/network/locations/',
        'https://sdnetwork.ca/resources/',
        'https://sdnetwork.ca/contact/'
      ]
    })
  ],
  build: {
    inlineStylesheets: 'auto'
  }
});
