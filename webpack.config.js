'use strict';

const debug = process.env.NODE_ENV !== 'production';
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    app: './app/app.jsx'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].min.js'
  },
  plugins: [new ExtractTextPlugin("[name].css")],
};

config = merge.smart(baseConfig, config);
console.log('------------------ webpack configuration -------------------\n', config);
module.exports = config;
