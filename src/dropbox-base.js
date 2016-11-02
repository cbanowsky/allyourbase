/**
 * Created by cam on 11/2/16.
 */
var env = require('dotenv').config({path:'../' });
var Dropbox =  require ('dropbox');
//var requests = require('./dropbox-requests');
var dbx = new Dropbox({accessToken: env.ACCESS_TOKEN});
var prompt = require('prompt');

prompt.start();

    function error (error, result) {
    var dbx = new Dropbox ({accessToken: env.ACCESS_TOKEN });
    dbx.filesListFolder({path: '/Public'})
        .then(function (response) {
            console.log(response);
        });
};
// Polyfill Object.assign() for older browsers
//require('./object-assign-polyfill');

dbx.filesListFolder({path: ''})
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
/**
 * Get a URL that can be used to authenticate users for the Dropbox API.
 * @arg {String} redirectUri - A URL to redirect the user to after
 * authenticating. This must be added to your app through the admin interface.
 * @arg {String} [state] - State that will be returned in the redirect URL to help
 * prevent cross site scripting attacks.
 * @returns {String} Url to send user to for Dropbox API authentication
 */



module.exports = dbx;