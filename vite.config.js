import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ai/',
  plugins: [react()],
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/ai\/.*$/, to: '/ai/index.html' }
      ]
    }
  }
})
