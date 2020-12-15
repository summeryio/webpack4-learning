const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
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
    new CleanWebpackPlugin()
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "async"
    }
  },
  output: {
    // publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  }
}