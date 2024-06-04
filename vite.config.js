import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000 // 1000kB = 1MB
  },
  resolve: {
    alias: {
      '~@flaticon': path.resolve(__dirname, 'node_modules/@flaticon')
    }
  }
})
