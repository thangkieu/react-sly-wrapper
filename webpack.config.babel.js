import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: {
    index: './index.js',
  },
  output: {
    filename: 'dist/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
