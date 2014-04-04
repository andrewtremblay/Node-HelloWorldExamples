//
// Create a node-static server instance to serve the './node-static-public' folder
//
var shared = require('./_shared');
//npm install node-static
var static = require('node-static');

var fileServer = new(static.Server)('./node-static-public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, result) {
            if (err) { // There was an error serving the file
                console.log("Error serving " + request.url + " - " + err.message);
                //Respond to the client
                //You can do more here. Maybe serve up a static 404 page that you know exists? 
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }).resume();
}).listen(shared.nodeStaticPort);
console.log('node-static server running at http://'+shared.serverIP+':'+shared.nodeStaticPort);
