var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: glob.sync(path.resolve('.', 'examples', 'index.js')),
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('demo')
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-import')({ skipDuplicates: true }),
                  require('postcss-cssnext')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({ title: 'React Customizable Carousel', template: path.resolve('examples', 'index.ejs') })
  ],
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('node_modules')
    ]
  },
  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  }
}
