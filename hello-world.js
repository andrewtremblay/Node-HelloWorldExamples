var shared = require('./_shared');

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(shared.helloWorldPort , shared.serverIP);// , shared.serverIP is optional

console.log('Hello World Server running at http://'+shared.serverIP+':'+shared.helloWorldPort);
