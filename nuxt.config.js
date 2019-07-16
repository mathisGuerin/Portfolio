module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mathis Guérin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'LI_z_1xaBLzMq5XAircSr5q3GTQFimgwuuQdzJw3X6M',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio Mathis Guérin - Développeur front-end',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: false,
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  plugins: ['~/plugins/fontawesome.js'],
};

