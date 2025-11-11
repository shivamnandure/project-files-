// Interactive Node.js Web Server
const http = require('http');
const url = require('url');

const PORT = 3000;

// Server statistics
let visitCount = 0;
const serverStartTime = new Date();

// Create the HTTP server with routing
const server = http.createServer((req, res) => {
  visitCount++;
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Set default header
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // Routing
  if (pathname === '/' || pathname === '/home') {
    res.end(getHomePage());
  } else if (pathname === '/about') {
    res.end(getAboutPage());
  } else if (pathname === '/stats') {
    res.end(getStatsPage());
  } else if (pathname === '/greet') {
    const name = query.name || 'Guest';
    res.end(getGreetPage(name));
  } else if (pathname === '/time') {
    res.end(getTimePage());
  } else {
    res.writeHead(404);
    res.end(get404Page());
  }
});

// Page templates
function getHomePage() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Node.js Server</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .nav {
          margin: 30px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        a {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        a:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        .feature {
          background: rgba(255, 255, 255, 0.15);
          padding: 15px;
          margin: 15px 0;
          border-radius: 8px;
          border-left: 4px solid #ffd700;
        }
        code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Welcome to My First Node.js Web Server!</h1>
        <p>Visit count: <strong>${visitCount}</strong></p>
        
        <div class="nav">
          <a href="/">🏠 Home</a>
          <a href="/about">ℹ️ About</a>
          <a href="/stats">📊 Stats</a>
          <a href="/time">⏰ Time</a>
          <a href="/greet?name=YourName">👋 Greet</a>
        </div>

        <h2>✨ Features</h2>
        <div class="feature">
          <strong>📍 Multiple Routes:</strong> Navigate between different pages
        </div>
        <div class="feature">
          <strong>📈 Statistics:</strong> Track server uptime and visits
        </div>
        <div class="feature">
          <strong>🎨 Beautiful UI:</strong> Styled with modern CSS
        </div>
        <div class="feature">
          <strong>🔗 Query Parameters:</strong> Try <code>/greet?name=John</code>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getAboutPage() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>About - My Node.js Server</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        a { color: #ffd700; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📖 About This Server</h1>
        <p>This is an interactive Node.js HTTP server built with the core <code>http</code> module.</p>
        <h3>Technologies Used:</h3>
        <ul>
          <li>Node.js HTTP Module</li>
          <li>URL Parsing</li>
          <li>Dynamic HTML Generation</li>
          <li>CSS Styling</li>
        </ul>
        <p><a href="/">← Back to Home</a></p>
      </div>
    </body>
    </html>
  `;
}

function getStatsPage() {
  const uptime = Math.floor((new Date() - serverStartTime) / 1000);
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = uptime % 60;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Stats - My Node.js Server</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        .stat {
          background: rgba(255, 255, 255, 0.2);
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          font-size: 1.2em;
        }
        a { color: #ffd700; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📊 Server Statistics</h1>
        <div class="stat">
          <strong>Total Visits:</strong> ${visitCount}
        </div>
        <div class="stat">
          <strong>Server Uptime:</strong> ${hours}h ${minutes}m ${seconds}s
        </div>
        <div class="stat">
          <strong>Started At:</strong> ${serverStartTime.toLocaleString()}
        </div>
        <div class="stat">
          <strong>Port:</strong> ${PORT}
        </div>
        <p><a href="/">← Back to Home</a></p>
      </div>
    </body>
    </html>
  `;
}

function getGreetPage(name) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Greetings - My Node.js Server</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          text-align: center;
        }
        h1 { font-size: 3em; margin: 20px 0; }
        a { color: #ffd700; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>👋 Hello, ${name}!</h1>
        <p>Welcome to my Node.js server!</p>
        <p>Try changing the name in the URL: <code>/greet?name=YourName</code></p>
        <p><a href="/">← Back to Home</a></p>
      </div>
    </body>
    </html>
  `;
}

function getTimePage() {
  const now = new Date();
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server Time - My Node.js Server</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          text-align: center;
        }
        .time { font-size: 3em; margin: 30px 0; }
        a { color: #ffd700; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>⏰ Server Time</h1>
        <div class="time">${now.toLocaleTimeString()}</div>
        <p>${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p><a href="/">← Back to Home</a></p>
      </div>
    </body>
    </html>
  `;
}

function get404Page() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Page Not Found</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        h1 { font-size: 5em; margin: 0; }
        a { color: #ffd700; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>404</h1>
        <h2>🤔 Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <p><a href="/">← Go Home</a></p>
      </div>
    </body>
    </html>
  `;
}

// Start the server
server.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║   🚀 Server is Running Successfully!     ║
╚═══════════════════════════════════════════╝

📍 URL: http://localhost:${PORT}
⏰ Started: ${serverStartTime.toLocaleString()}

Available Routes:
  🏠 /           - Home page
  ℹ️  /about      - About page
  📊 /stats      - Server statistics
  ⏰ /time       - Current server time
  👋 /greet?name - Personalized greeting

Press Ctrl+C to stop the server
  `);
});