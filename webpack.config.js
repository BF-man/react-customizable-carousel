var path = require('path')
var glob = require('glob')
var extname = require('path-complete-extname')
var webpack = require('webpack')

module.exports = {
  devtool: 'sourcemap',
  stats: {
    errorDetails: true
  },
  entry: path.resolve('.', 'src', 'index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    pathinfo: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-import')({ skipDuplicates: true }),
                  require('postcss-extend'),
                  require('postcss-cssnext')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=25000'
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: [ '.js', '.coffee' ],
    modules: [
      path.resolve('node_modules')
    ]
  },
  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  },
  devServer: {
    historyApiFallback: true
  }
}
