import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react(), inspect()],
});
