// filename:    app.js
// authour(s):  Logan Blackstad
// descr:       a simple node server deployment
// date:        Sep 03 2020


const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(201, { 'Content-Type': 'text/plain' });

  // Informational responses(100–199),
  // Successful responses(200–299),
  // Redirects(300–399),
  // Client errors(400–499),
  // and Server errors(500–599).


  // Send back a response and end the connection
  res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');