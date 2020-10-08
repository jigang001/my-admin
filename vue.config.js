const packageName = require('./package.json').name

module.exports = {
  devServer: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    // proxy: {
    //   '/myAdmin': {
    //     target: '//localhost:8080',
    //     changeOrigin: true
    //   },
    // }
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  }
}