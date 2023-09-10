import { defineConfig, minimalPreset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: {
    ...minimalPreset,
    maskable: {
      sizes: [512],
      padding: 0.2,
      resizeOptions: {
        fit: 'contain',
        background: 'black',
      },
    },
    apple: {
      sizes: [180],
      padding: 0.2,
      resizeOptions: {
        fit: 'contain',
        background: 'black',
      },
    },
  },
  images: ['public/logo.svg']
})