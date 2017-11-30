var net = require('net');
var textChunk = '';
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 8080

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.on('data', function(data){
		console.log(data);
		textChunk = data.toString('utf8');
		console.log(textChunk);
		socket.write(textChunk);
	});
	socket.on('close', function(){
		console.log('Closed');
	});
});
server.listen(80, '127.0.0.1');
