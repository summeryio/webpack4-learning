const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')

const commonConfig = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      loader: 'babel-loader'
    },{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 2048
        }
      }
    },{
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'font/'
        }
      }
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  performance: false,
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}