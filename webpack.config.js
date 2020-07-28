const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    publicPath: `/`,
    path: path.join(__dirname, `public`)
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`]
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    historyApiFallback: true,
    open: true,
    port: 1337
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  devtool: `source-map`
};
