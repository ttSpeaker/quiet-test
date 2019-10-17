/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

// Initialize variables.
var port = 8080; // process.env.PORT || 30662;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use(express.static('./'))

// Set up our one route to the index.html file.
// app.get('*', function (req, res) {
//     console.log("ok");
//     res.send("ok");
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
app.get('/send', function (req, res) {
    res.sendFile(path.join(__dirname + '/examples/text/sendtext.html'));
});
app.get('/sendtext.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/examples/text/sendtext.js'));
});
app.get('/receive', function (req, res) {
    res.sendFile(path.join(__dirname + '/examples/text/receivetext.html'));
});
app.get('/receivetext.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/examples/text/receivetext.js'));
});
// Start the server.
app.listen(port, '10.50.12.86' || 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  });
console.log('Listening on port ' + port + '...');


