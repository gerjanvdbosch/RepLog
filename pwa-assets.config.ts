import { defineConfig, minimalPreset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: {
    ...minimalPreset,
    maskable: {
      sizes: [512],
      padding: 0.2,
      resizeOptions: {
        fit: 'contain',
        background: '#1C1C1E',
      },
    },
    apple: {
      sizes: [180],
      padding: 0.2,
      resizeOptions: {
        fit: 'contain',
        background: '#1C1C1E',
      },
    },
  },
  images: ['public/logo.svg']
})