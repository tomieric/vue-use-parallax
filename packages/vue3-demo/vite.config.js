const resolve = require('path').resolve

export default {
  base: process.env.NODE_ENV === 'production' ? '/vue-use-parallax/' : '/',
  outDir: resolve(__dirname, '../../dist'),
  assetsDir: 'assets'
}