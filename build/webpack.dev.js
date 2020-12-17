const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: false,
    port: 8080,
    hot: true,
    hotOnly: false
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {},
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
}

module.exports = devConfig