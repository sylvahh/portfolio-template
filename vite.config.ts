import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'src') + '/',
      '@components/': path.resolve(__dirname, 'src/components') + '/',
      '@ui/': path.resolve(__dirname, 'src/components/ui') + '/',
      '@features/': path.resolve(__dirname, 'src/features') + '/',
      '@assets/': path.resolve(__dirname, 'src/assets') + '/',
      '@routes/': path.resolve(__dirname, 'src/routes') + '/',
      '@pages/': path.resolve(__dirname, 'src/pages') + '/',
      '@services/': path.resolve(__dirname, 'src/services') + '/',

    },
  },
})
