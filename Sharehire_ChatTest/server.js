'use strict';
var http = require('http');
var port = process.env.PORT || 8000;
var main = require('./main');

var server = http.createServer(main.handleRequest).listen(port);
