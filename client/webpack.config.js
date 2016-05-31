var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', './app.js'],
    vendor: ['angular', 'angular-route']
  },
  module: {
    loaders: [
      { test: /\.html$/, loaders: ["html"] }
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
