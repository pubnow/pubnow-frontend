export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Trang Quản lý - Publish Now',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
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
  css: ['@/assets/scss/main.scss', '@pubnow/ui/scss/pubnow-ui.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
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
