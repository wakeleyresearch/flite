import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './components'),
      '@layouts': resolve(__dirname, './layouts'),
    },
  },
  optimizeDeps: {
    include: ['d3', '@vueuse/core', '@faker-js/faker'],
  },
})
