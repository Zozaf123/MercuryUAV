import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/mercury-uav/' to '/' for Netlify
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
});