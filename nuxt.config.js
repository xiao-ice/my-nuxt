const { head } = require("./nuxt_config/head");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt',
    ...head
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/icon/iconfont.css',
    'vuesax/dist/vuesax.css',
    '@/assets/css/theme.less'
  ],

  // Global less
  styleResources: {
    less: [
      '@/assets/css/common.less',
      '@/assets/css/public.less'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // style-resources
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // server
  server: {
    host: '127.0.0.1'
  }
}
