export default {
  entry: {
    index: './index.js',
  },
  output: {
    filename: 'dist/[name].js',
  },
  module: {
    rules: [
      {
        test: '/.js$/',
        loader: 'babel-loader'
      }
    ]
  }
};
