import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  // Your site config here
  site: 'https://htnicolas.github.io/',
  base: 'personal_website',
  output: 'static',
  integrations: [image()],
});
