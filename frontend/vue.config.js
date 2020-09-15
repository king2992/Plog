// module.exports = {
//   "transpileDependencies": [
//     "vuetify",
//     'vue-echarts',
//     'resize-detector'
//   ],
  // devServer: {
  //   proxy: { 
  //     '/api': { 
  //       target: 'http://localhost:3000/api',
  //       changeOrigin: true, 
  //       pathRewrite: { 
  //         '^/api': ''
  //       } 
  //     } 
  //   } 
  // },
//   outputDir: '../backend/public',
// }


const path = require('path');

module.exports = {
  devServer: {
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: path.resolve(__dirname, "../src/main/resources/static")
}