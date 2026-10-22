/**
 * Web Application for Docker Containerization (JavaScript / Node.js)
 * Listens on port 5000, provides / and /health endpoints.
 */

const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' || req.url === '') {
    res.writeHead(200);
    return res.end(
      JSON.stringify({
        status: 'success',
        message: 'Welcome to Containerized Node.js Web Application!',
        hostname: os.hostname(),
        platform: os.platform(),
        timestamp: new Date().toISOString()
      })
    );
  }

  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(
      JSON.stringify({
        status: 'healthy',
        uptime: `${process.uptime().toFixed(1)} seconds`
      })
    );
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Route not found' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Node.js Web App running on port ${PORT}`);
});
