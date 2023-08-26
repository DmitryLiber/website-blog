import path from 'path'
// import vue from '@vitejs/plugin-vue'
// import pug from 'vite-plugin-pug'
import mqpacker from '@hail2u/css-mqpacker'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['/assets/scss/style.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            "@import '/assets/scss/_variables.scss';@import '/assets/scss/_mixins.scss';",
        },
      },
      postcss: {
        plugins: [
          mqpacker({
            sort: true,
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  },
})
