// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
    allowedHosts: ['baynex-1-0-web1.onrender.com'],
    host: true, // ensures it works with 0.0.0.0
  },
});
