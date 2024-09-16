import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.cloudevents.online',
        changeOrigin: true,
        secure: false,
        headers: {
          //'x-api-key': 'dc6ebb8cf02a24945bd9e15100c16d27e12fbb41ad40cc84aee883f5000b461f'
          'x-api-key': `${process.env.API_KEY}`,
        }
      },
    },
  },
});