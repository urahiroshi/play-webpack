const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app-mobile': path.resolve(__dirname, '../src/app-mobile.js'),
    'app-desktop': path.resolve(__dirname, '../src/app-desktop.js')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        lib: {
          name: 'lib',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  target: 'web'
};
