const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app-mobile': path.resolve(__dirname, '../src/app-mobile.js'),
    'app-desktop': path.resolve(__dirname, '../src/app-desktop.js')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      chunks: ['app-mobile', 'app-desktop'],
      minChunks: module => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  target: 'web'
};
