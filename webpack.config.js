var path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "cannon": false,
    }
  },

  module: {
    rules: [
      {
        test: /\.(wasm)$/,
        type: "javascript/auto",
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/wasm", //set this whatever path you desire
            name: "[name]-[hash].[ext]"
          }
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader',
      },
    ],
  },
};