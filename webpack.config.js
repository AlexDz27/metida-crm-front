const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/public`
  },
  mode: 'development',
  devServer: {
    contentBase: './public',
    historyApiFallback: true, // don't send request to server when reloading page (useful when working on layout of a page)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx'] // enable imports without writing .js/.jsx file extensions
        },
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', ['@babel/preset-react', { 'runtime': 'automatic' }]],
              plugins: ['@babel/plugin-transform-runtime'] // enable async/await
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false } // allow using relative imports like backgroind-image: url('/images/foo.jpg')
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'styles/app.css'}),
  ]
}