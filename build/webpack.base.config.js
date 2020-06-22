const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: './src/public/index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader:'vue-loader', options: { loaders: {} }, exclude: /node_modules/ },
      { test: /\.(png|svg|jpeg|jpg|gif)$/, loader: 'file-loader', exclude: /node_modules/ },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'vue-router': 'vue-router/dist/vue-router.js',

      '@': path.resolve('src')
    }
  }
}