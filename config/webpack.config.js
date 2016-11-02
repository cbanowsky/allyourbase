/**
 * Created by cam on 11/2/16.
 */
var webpack = require('webpack');


module.exports = {

    entry: __dirname + '../frontend/src/index.js',

    output: {
        filename: 'dropbox-sdk.js',
        path: __dirname + '/dist'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};