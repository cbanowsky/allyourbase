var express = require('express');
var env = require('dotenv');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./config/webpack-umd.config');
var webpackDevMiddleware = require('webpack-dev-middleware');

// Set Up The Server

var app = express();

app.use(webpackDevMiddleware)(webpack(webpackConfig))
