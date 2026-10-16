import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Piggy/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Piggy',
        short_name: 'Piggy',
        display: 'standalone',
        start_url: '/Piggy/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [{ src: 'icon-512.png', sizes: '512x512', type: 'image/png' }]
      }
    })
  ]
})