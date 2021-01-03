export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' }
    ]
  },

  loading: {
    color: '#fa932f'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-db822-default-rtdb.firebaseio.com'
  },

  router: {
    middleware: 'log'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    //baseURL: process.env.BASE_URL || 'https://nuxt-blog-db822-default-rtdb.firebaseio.com'
    fbAPIKey: 'AIzaSyC4h2fN07cTS8SJFZQ0AVLmcVAzah-tVQU'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
