//npm install express 
var shared = require('./_shared');

var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('Hello From Node Express');
});
app.get('/hello.txt', function(req, res){
  res.send('HELLO WORLD DOT TEE EX TEE');
});

app.listen(shared.expressServerPort, shared.serverIP);// , shared.serverIP is optional
console.log('Node Express Server running at http://'+shared.serverIP+':'+shared.expressServerPort);
