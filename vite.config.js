import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myappclone',
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
});


