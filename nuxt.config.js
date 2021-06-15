module.exports = {
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://39.100.59.197:8080'
  },
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    {
      src: '~plugins/ElementUI',
      ssr: true,
    },
   { src: "~plugins/map.js", ssr: false} ],
 
   

  css: [
    'swiper/swiper-bundle.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dre@mTech实验室',
    meta: [
      { charset: 'utf-8' },
      {  name:"viewport", content:"width=device-width,initial-scale=1,user-scalable=0"    },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script:[
      {src:'/js/flexible.js',type:'text/javascript',charset:'utf-8'}
    ]
     
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   postcss:{
    /*  plugins:{
        'postcss-pxtorem':{
          rootValue:37.5,
          propList:['*'],
          selectorBlackList:['mint-']
        }
     }
   }, */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:['element-ui'],   //防止element-ui被打包多次
  }
}
}
