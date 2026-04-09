import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcore from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcore()],
  },
  security: {
    checkOrigin: false,
  },
});
 
