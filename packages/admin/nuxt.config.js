export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0052cc', height: '3px' },
  loadingIndicator: {
    name: 'cube-grid',
    color: '#0052cc',
    background: '#fafafa',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/pubnow-ui',
      ssr: false,
    },
    {
      src: '~/plugins/vue-atlas',
      ssr: false,
    },
    {
      src: '~/plugins/vuelidate',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', '@nuxt/http', 'vue-wait/nuxt'],
  http: {},
  wait: { useVuex: true },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
