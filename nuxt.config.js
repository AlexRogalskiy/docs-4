import Sass from 'sass'

const dartSass = {
  implementation: Sass,
  additionalData: `
    @use "sass:math";
  `
}

export default {
  target: 'static',

  head: {
    title: 'ViewTube.wiki',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],

  modules: ['@nuxt/content'],

  styleResources: {
    scss: ['~/assets/styles/global.scss']
  },

  css: ['~/assets/fonts/expletus.css'],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    }
  },

  build: {
    loaders: {
      scss: dartSass
    }
  }
}
