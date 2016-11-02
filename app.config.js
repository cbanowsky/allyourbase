/**
 * Created by cam on 11/2/16.
 */
var Dropbox = require('dropbox');
var env = require('dotenv');

var dbx = new Dropbox({ accessToken: env.ACCESS_TOKEN });
dbx.filesListFolder({path: ''})
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });