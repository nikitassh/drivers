import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@widgets': path.resolve(__dirname, './src/widgets/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@lib': path.resolve(__dirname, './src/shared/lib/'),
      '@ui': path.resolve(__dirname, './src/shared/ui/'),
    },
  },
})
