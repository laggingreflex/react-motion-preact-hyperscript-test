module.exports = {
  entry: './app.js',
  output: { filename: 'build.js' },
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  }
};
