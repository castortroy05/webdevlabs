const http = require('http'); 
http.createServer(function(req, res) {     res.writeHead(200, { 'Content-type': 'text/plain' });     res.end('Hello from my Node.js application!'); }).listen(3000); 
console.log('Server started on port 3000, ctrl^c to quit.'); 