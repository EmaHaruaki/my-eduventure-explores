export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s|' + 'Eduventure Explores',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '「マレーシアへの移住・留学をサポートするブログ」というテーマで構成されたサイトです。 現地の情報や生活に必要な知識、留学や就職に関する情報など、様々な情報を提供しています。' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Eduventure Explores' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://eduventure-explores.net/' },
      { hid: 'og:title', property: 'og:title', content: 'Eduventure Explores' },
      { hid: 'og:description', property: 'og:description', content: '「マレーシアへの移住・留学をサポートするブログ」というテーマで構成されたサイトです。 現地の情報や生活に必要な知識、留学や就職に関する情報など、様々な情報を提供しています。'},
      { hid: 'og:image', property: 'og:image', content: 'サイトURL' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Eduventure Explores' },
      { hid: 'twitter:description', name: 'twitter:description', content: '「マレーシアへの移住・留学をサポートするブログ」というテーマで構成されたサイトです。 現地の情報や生活に必要な知識、留学や就職に関する情報など、様々な情報を提供しています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      { async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6223204618871414", crossorigin: "anonymous" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/main.min.css',
    'assets/style.min.css',
    'assets/style2.min.css',
    'assets/style_blog-123.min.css',
    'assets/style_blog-123-167.css',
    'assets/style_blog-123-169.css',
    'assets/style_blog-123-17.css',
    'assets/offside.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/gtag',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
