import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      vue(),
      VitePWA({ 
        registerType: 'autoUpdate',
        manifest: {
          theme_color: "#ffffff",
          icons: [
            {
                "src": "icon.svg",
                "sizes": "any",
                "type": "image/svg+xml",
                "purpose": "maskable any"
            }
          ],
        },
      }),
      legacy()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom'
    },
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/RepLog/'
  }

  return config
})
