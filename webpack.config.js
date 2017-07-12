var path = require('path')
var glob = require('glob')
var extname = require('path-complete-extname')
var webpack = require('webpack')

module.exports = {
  entry: glob.sync(path.resolve('.', 'src', 'index.js')),
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
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
