// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwindcss(),
    ],
    vite: {
      resolve: {
          alias: {
              '@repo/ui': path.resolve(__dirname, '../../packages/ui/src'),
              '@repo/fonts': path.resolve(__dirname, '../../packages/fonts'),
              '@repo/assets': path.resolve(__dirname, '../../packages/assets'),
              '@stylesAstro': path.resolve(__dirname, './src/styles'),
              '@componentsAstro': path.resolve(__dirname, './src/components'),
              '@layoutsAstro': path.resolve(__dirname, './src/layouts'),
          }
      }
    }
});