const { resolve, join } = require('path')
const pkage = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'static/[name].[chunkhash:8].js',
    publicPath: '/',
    // publicPath: 'http://localhost:8421/',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime'],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /.s?css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'less-loader',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json', '.scss'],
    alias: {
      '@': join(__dirname, '../src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      title: pkage.name
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash:8].css'
    })
  ]
}