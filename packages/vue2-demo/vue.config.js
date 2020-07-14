const resolve = require('path').resolve

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-use-parallax/vue2-demo/' : '/',
  outputDir: resolve(__dirname, '../../dist/vue2-demo/'),
  // transpileDependencies: ['vue-use-parallax2'],
  configureWebpack: {
    resolve: {
        symlinks:false // 使用npm link
    }
  }
}