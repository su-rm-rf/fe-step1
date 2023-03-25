const { resolve, join } = require('path')
const common = require('./webpack.common')
const pkage = require('../package.json')

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8421,
    hot: true,
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /./, to: resolve(__dirname, '../dist/index.html') }
    //   ]
    // },
  }
}