const path = require('path');

module.exports = {
  devtool: 'source-map-inline',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-fake-list.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: ['react'],
};
