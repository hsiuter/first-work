const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  },
  devServer: {
      inline: true,
      hot: true,
      compress: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
};
