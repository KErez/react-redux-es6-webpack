'use strict';

const debug = process.env.NODE_ENV !== 'production';
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: './app/app.jsx'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].min.js'
  },
  plugins: [],
};

config = merge.smart(baseConfig, config);
module.exports = config;
