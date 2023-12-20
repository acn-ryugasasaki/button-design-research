// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs'),
    },
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  css: ['@/assets/styles/reset.scss'],
});
