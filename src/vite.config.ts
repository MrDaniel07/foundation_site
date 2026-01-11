import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'figma:asset/92e40b2871d1e969f0c8f4d7c135b049c9690ef6.png': path.resolve(__dirname, './assets/92e40b2871d1e969f0c8f4d7c135b049c9690ef6.png'),
    },
  },
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
  },
});
