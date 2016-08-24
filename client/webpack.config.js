'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', './app.js'],
    vendor: ['bootstrap-webpack', 'angular', 'angular-route', 'moment']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ["html"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      { test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

     // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
     // loads bootstrap's css.
     { test: /\.(woff|woff2)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
     { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
     { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
     { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  output: {
    path: __dirname + '/public_js',
    publicPath: "/assets/",
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  }
};
