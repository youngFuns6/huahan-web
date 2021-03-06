const path = require('path')

const productPlugins = []
if (process.env.NODE_ENV === 'production') {
  productPlugins.push('transform-remove-console')
}

export default {
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'qunkong.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      //   {
      //   src: '/flexible.js',
      //   type: 'text/javascript',
      //   charset: 'utf-8'
      // },


    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'assets/css/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    // 'element-ui/lib/theme-chalk/display.css',
    'assets/css/style.css',
    'aos/dist/aos.css',
    // 'vant/lib/pagination/style',
    // 'vant/lib/icon/style',
    // 'vant/lib/dialog/style',
    'vant/lib/dropdown-item/style',
    'vant/lib/dropdown-menu/style',
    'vant/lib/dialog/style',
    'vant/lib/list/style',
    'vant/lib/cell/style',
    // 'vant/lib/lazyload/style',
    'assets/font/iconfont.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~plugins/lib-flexible.js', ssr: false},
    { src: '~/plugins/vant.js', ssr: true },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/router.js', ssr: true },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/element-ui', ssr: true },
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
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    less: ['./assets/**/*.less'],
    // sass: ...
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   proxy: true,
  // },
  // proxy: { // ??????
  //   '/api/': {
  //     target: 'https://api.youddian.com/api', //??????????????????
  //     changeOrigin: true,
  //     pathRewrite: {
  //       // '^/api': ''
  //     }
  //   }
  // },

  // ???????????????
  router: {
    middleware: 'middl',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/news/:type/:id.html',
        component: resolve(__dirname, 'pages/detail.vue')
      },
        {
          path: '/product/:type/:id.html',
          component: resolve(__dirname, 'pages/detail.vue')
        },
        {
          path: '/prodShow/:page/:type?',
          component: resolve(__dirname, 'pages/prodShow.vue')
        },
        {
          path: '/news/:type/:page',
          component: resolve(__dirname, 'pages/news.vue')
        },
        {
          path: '*',
          component: resolve(__dirname, 'pages/404.vue')
        }
      )
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: { allChunks: true },
    // transpile: [/^element-ui/],
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 192  // ????????????192???????????????pc????????????1920px
    //   })
    // ],
    // analyze: true, // ??????webpack-bundle-analyzer???????????????????????????????????????

    // vendor: ['element-ui'],

    // maxChunkSize: 300000,

    // productionSourceMap: false,

    // productionGzip: true,

    // productionGzipExtensions: ['js', 'css', 'svg'],

    babel: { // ????????????
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ],
        // ['import', {
        //   libraryName: 'vant',
        //   "style": (name) => {
        //     return `${name}/style/less.js`
        //   }
        // }, 'vant'],
        ...productPlugins
      ],
      // loaders: {
      //   less: {
      //     javascriptEnabled: true,
      //     modifyVars: {
      //       // ????????????
      //       "blue": "1989fa",
      //       // ??????less??????
      //       hack: `true; @import "${path.join(
      //         __dirname,
      //         "./assets/styles/vant.var.less"
      //       )}";`
      //     }
      //   }
      // }
    }
  }
}
