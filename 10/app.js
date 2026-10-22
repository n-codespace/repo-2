/**
 * Multi-Container Web Application (JavaScript / Node.js)
 * Connects to Redis service via internal Docker Compose DNS name 'redis'.
 * Increments page visit counter on each request.
 */

const http = require('http');
const { createClient } = require('redis');

const REDIS_HOST = process.env.REDIS_HOST || 'redis';
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const PORT = process.env.PORT || 5000;

// Initialize Redis Client
const client = createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

let isRedisConnected = false;
let fallbackHits = 0;

client.on('error', (err) => {
  // Graceful log on disconnect
  console.log(`[Redis Notice] ${err.message}`);
  isRedisConnected = false;
});

client.on('connect', () => {
  console.log(`[+] Connected to Redis successfully at ${REDIS_HOST}:${REDIS_PORT}`);
  isRedisConnected = true;
});

// Auto-connect to Redis
(async () => {
  try {
    await client.connect();
  } catch (err) {
    console.log('[Notice] Waiting for Redis service to become available...');
  }
})();

function getHtml(hits, storageType) {
  return `<!DOCTYPE html>
<html>
<head>
    <title>Multi-Container Web App (Node.js & Redis)</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding-top: 50px; background: #f0fdf4; color: #166534; }
        .box { background: white; border: 2px solid #86efac; border-radius: 12px; display: inline-block; padding: 40px; box-shadow: 0 8px 16px rgba(0,0,0,0.08); max-width: 550px; }
        h1 { font-size: 1.8rem; margin-bottom: 10px; }
        .counter { font-size: 3.5rem; font-weight: bold; color: #15803d; margin: 15px 0; }
        .badge { background: #bbf7d0; color: #14532d; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 0.85rem; }
    </style>
</head>
<body>
    <div class="box">
        <h1>Docker Compose Orchestration Demo</h1>
        <p>This <strong>Node.js (JavaScript)</strong> web service communicates with a separate <strong>Redis</strong> container via Docker internal DNS.</p>
        <div class="counter">${hits}</div>
        <span class="badge">Storage: ${storageType}</span>
        <p style="margin-top:20px; color:#4b5563; font-size:0.9rem;">Refresh the page to see visits increment in real time!</p>
    </div>
</body>
</html>`;
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  let hits = 0;
  let storageType = 'Redis (Distributed Memory)';

  try {
    if (client.isOpen) {
      hits = await client.incr('hits');
    } else {
      fallbackHits++;
      hits = fallbackHits;
      storageType = 'Local In-Memory (Redis connecting...)';
    }
  } catch (e) {
    fallbackHits++;
    hits = fallbackHits;
    storageType = 'Local In-Memory Fallback';
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(getHtml(hits, storageType));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Web application running on http://0.0.0.0:${PORT}`);
});
