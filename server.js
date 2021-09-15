const express = require('express');
const server = express();
const body_parser = require('body-parser');

const http = require('http');
const https = require('https');

server.use(body_parser.raw({
    type: 'image/jpg',
    limit: '10mb'
}));

const routes = require('./api/routes/routes');
routes(server);

const path = require('path');

const options = {
    root: path.join(__dirname, 'db/recipes/')
}

var fs = require('fs');
var privateKey  = fs.readFileSync('./sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('./sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(server);
var httpsServer = https.createServer(credentials, server);

httpServer.listen(4001);
httpsServer.listen(4101);

console.log("Listening at ports 4001(http) and 4101(https)");