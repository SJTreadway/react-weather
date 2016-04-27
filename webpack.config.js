const path = require('path')
const webpack = require('webpack')

// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: __dirname + '/app/index.html',
//     filename: 'index.html',
//     inject: 'body'
// })


module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicpath: '/dist/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.(jpg|svg)$/, loader: 'file-loader?name=[path][name].[ext]' }
        ]
    },
    plugins: [
      // HtmlWebpackPluginConfig,
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
  ]
}
