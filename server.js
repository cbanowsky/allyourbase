var express = require('express');
var rewrite = require('express-urlrewrite');
var env = require('dotenv');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./config/webpack-umd.config');
var webpackDevMiddleware = require('webpack-dev-middleware');

// Set Up The Server

var app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: '/__build__/'
}));


fs.readdirSync(__dirname).forEach(function(file) {
    if (fs.statSync(path.join(__dirname, file)).isDirectory()) {
        app.use(rewrite('/' + file + '/*', + file + './www/index.html'));
    }
});

app.use(express.static(__dirname));



var port = process.env.PORT || 3030;

app.listen(port);

console.log('DropBox App Listening On ' + port );