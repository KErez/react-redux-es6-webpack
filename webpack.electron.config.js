'use strict';

const debug = process.env.NODE_ENV !== 'production';
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

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

config.target = webpackTargetElectronRenderer(config);
if (debug) {
  config.plugins.push(new HtmlWebpackPlugin({
    title: 'React Redux Starter'
  }));
}

config = merge.smart(baseConfig, config);
module.exports = config;
