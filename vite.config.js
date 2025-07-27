// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FUTURE_FS_02/',  // GitHub repo name for correct asset path
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // IMPORTANT: fallback for SPA
  }
});
