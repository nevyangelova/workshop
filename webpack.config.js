const Webpack = require('webpack');

module.exports = {
  // Switch loaders to debug mode.
  debug: process.env.NODE_ENV !== 'production',

  context: __dirname + "/src",

  entry: {
    html: "./index.html",
    javascript: "./js/index.js"
  },

  output: {
    filename: "js/index.js",
    path: __dirname + "/build"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"],
        query: {},
      },

      {
        test: /\.html$/,
        loaders: ["file?name=[name].[ext]"]
      }
    ]
  },
};
