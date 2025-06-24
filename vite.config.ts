import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['baynex-1-0-web1.onrender.com'], // 👈 This line allows Render to show your site
  },
});
