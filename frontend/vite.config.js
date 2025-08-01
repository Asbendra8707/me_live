import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../api/dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/user': 'http://localhost:5000',
      '/login': 'http://localhost:5000',
      '/send': 'http://localhost:5000',

    }
  },
 
})
