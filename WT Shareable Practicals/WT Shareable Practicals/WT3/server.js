// Basic Node.js Web Server
const http = require('http');

const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send the response
  res.end('<h1>Welcome to My First Node.js Web Server!</h1>');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});