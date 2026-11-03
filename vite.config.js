
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portofolio_Alfredo/',
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 20,
            },
            {
              name: 'animation-vendor',
              test: /node_modules[\\/](framer-motion|gsap)[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})
