'use strict';
var webpack = require('webpack');

var path = require('path');

var APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    path: APP + '/core',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
