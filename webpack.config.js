const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // dev-server에서 중요
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
  }
  
};
