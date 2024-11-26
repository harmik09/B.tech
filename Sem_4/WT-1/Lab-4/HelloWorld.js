// Import the http module
const http = require('http');

// Define the server's behavior
const server = http.createServer((req, res) => {
    // Set the response HTTP headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    res.end('Harmik!\n');
});

// Specify the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
