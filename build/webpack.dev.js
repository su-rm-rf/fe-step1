const { resolve, join } = require('path')
const common = require('./webpack.common')
const pkage = require('../package.json')

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8121,
    hot: true,
    historyApiFallback: true,
  }
}