var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', '../public_js/app.bundle.js'],
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/public_js',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
