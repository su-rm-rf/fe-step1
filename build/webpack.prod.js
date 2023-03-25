const { resolve, join } = require('path')
const common = require('./webpack.common')

module.exports = {
  ...common,
  mode: 'production',
}