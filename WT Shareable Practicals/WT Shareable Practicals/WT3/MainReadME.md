# 🚀 Node.js Web Server - Complete Setup Guide

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Project Structure](#project-structure)
- [Running the Server](#running-the-server)
- [Testing the Server](#testing-the-server)
- [Troubleshooting](#troubleshooting)
- [Understanding the Code](#understanding-the-code)

---

## ✅ Prerequisites

Before you begin, make sure you have Node.js installed on your computer.

### Check if Node.js is Installed
Open your terminal/command prompt and type:
```bash
node --version
```

If you see a version number (e.g., `v18.17.0`), you're good to go! ✅

### Install Node.js (if not installed)
1. Visit [https://nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Restart your terminal/command prompt after installation

---

## 📦 Installation Steps

### Step 1: Create a Project Folder
```bash
# Windows
mkdir my-nodejs-server
cd my-nodejs-server

# Mac/Linux
mkdir my-nodejs-server
cd my-nodejs-server
```

### Step 2: Create the Server File

**YES, all the code goes in ONE FILE!** 

Create a file named `server.js` in your project folder.

**Option A - Basic Version:**
- Copy the code from the **first artifact** (Basic Node.js Web Server)
- Paste it into `server.js`

**Option B - Interactive Version (Recommended):**
- Copy the code from the **second artifact** (Interactive Node.js Web Server)
- Paste it into `ADserver.js`

### Step 3: Verify Your File Structure
Your folder should look like this:
```
my-nodejs-server/
└── server.js
```

That's it! Node.js projects can be this simple. No additional files needed for this basic server.

---

## 🏃 Running the Server

### Start the Server
In your terminal (inside the `my-nodejs-server` folder), run:

```bash
node server.js
```

### Expected Output
You should see:
```
╔═══════════════════════════════════════════╗
║   🚀 Server is Running Successfully!     ║
╚═══════════════════════════════════════════╝

📍 URL: http://localhost:3000
⏰ Started: [current date and time]

Available Routes:
  🏠 /           - Home page
  ℹ️  /about      - About page
  📊 /stats      - Server statistics
  ⏰ /time       - Current server time
  👋 /greet?name - Personalized greeting

Press Ctrl+C to stop the server
```

### Stop the Server
Press `Ctrl+C` in your terminal to stop the server.

---

## 🧪 Testing the Server

### Method 1: Using a Web Browser (Easiest)
1. Open your favorite web browser (Chrome, Firefox, Edge, Safari)
2. Type in the address bar: `http://localhost:3000`
3. Press Enter
4. You should see the welcome page! 🎉

### Method 2: Testing Different Routes
Try these URLs in your browser:

| URL | What It Does |
|-----|--------------|
| `http://localhost:3000/` | Home page with navigation |
| `http://localhost:3000/about` | About page |
| `http://localhost:3000/stats` | Server statistics (visits, uptime) |
| `http://localhost:3000/time` | Current server time |
| `http://localhost:3000/greet?name=John` | Personalized greeting (change "John" to your name) |
| `http://localhost:3000/invalid` | 404 error page |

### Method 3: Using cURL (Command Line)
Open a **new** terminal window (keep the server running in the first one):

```bash
# Test home page
curl http://localhost:3000

# Test stats page
curl http://localhost:3000/stats

# Test greet with your name
curl http://localhost:3000/greet?name=YourName
```

---

## 🔧 Troubleshooting

### Problem: "Port 3000 is already in use"
**Solution:**
- Another program is using port 3000
- Stop any other servers running on port 3000
- Or change the port in `server.js`:
  ```javascript
  const PORT = 3001; // Change to any available port
  ```

### Problem: "command not found: node"
**Solution:**
- Node.js is not installed or not in your PATH
- Reinstall Node.js from [nodejs.org](https://nodejs.org)
- Restart your terminal after installation

### Problem: "Cannot find module 'http'"
**Solution:**
- The `http` module is built into Node.js
- Make sure you're using Node.js v12 or higher
- Check your Node version: `node --version`

### Problem: Browser shows "Cannot GET /"
**Solution:**
- The server isn't running
- Start it again with `node server.js`
- Make sure you see the success message in terminal

### Problem: "EADDRINUSE: address already in use"
**Solution:**
- Port 3000 is already being used
- Find and stop the process:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID [PID_NUMBER] /F
  
  # Mac/Linux
  lsof -ti:3000 | xargs kill -9
  ```

---

## 📚 Understanding the Code

### How It Works (Interactive Version)

#### 1. **Import Required Modules**
```javascript
const http = require('http');
const url = require('url');
```
- `http`: Creates the web server
- `url`: Parses URL and query parameters

#### 2. **Server Statistics**
```javascript
let visitCount = 0;
const serverStartTime = new Date();
```
- Tracks visits and server uptime

#### 3. **Create Server**
```javascript
const server = http.createServer((req, res) => {
  // Handle requests here
});
```
- Creates server that responds to HTTP requests

#### 4. **Routing Logic**
```javascript
if (pathname === '/') {
  res.end(getHomePage());
} else if (pathname === '/about') {
  res.end(getAboutPage());
}
```
- Different URLs show different pages

#### 5. **Start Listening**
```javascript
server.listen(PORT, () => {
  console.log('Server running...');
});
```
- Server starts listening on port 3000

---

## 🎓 Next Steps

### Experiment with the Code
1. **Change the port number** - Try port 8080 or 5000
2. **Add a new route** - Create a `/contact` page
3. **Modify the styling** - Change colors and fonts
4. **Add more features** - Calculator, form, etc.

### Example: Add a New Route
```javascript
// Add this in the routing section
else if (pathname === '/contact') {
  res.end(`
    <h1>Contact Us</h1>
    <p>Email: contact@example.com</p>
    <a href="/">Back to Home</a>
  `);
}
```

---

## 📝 Quick Reference Commands

```bash
# Navigate to project folder
cd my-nodejs-server

# Run the server
node server.js

# Stop the server
Ctrl+C

# Check Node version
node --version

# Check if port 3000 is in use (Windows)
netstat -ano | findstr :3000

# Check if port 3000 is in use (Mac/Linux)
lsof -i :3000
```

---

## 🎉 Success Checklist

- [ ] Node.js is installed
- [ ] Created `my-nodejs-server` folder
- [ ] Created `server.js` file with code
- [ ] Server starts without errors
- [ ] Can access `http://localhost:3000` in browser
- [ ] All routes work correctly
- [ ] Can stop server with Ctrl+C

---

## 💡 Tips

1. **Keep the terminal open** - The server only runs while the terminal is open
2. **Use Ctrl+C to stop** - Don't just close the terminal
3. **Refresh browser** - After code changes, restart the server and refresh browser
4. **Check console** - Look for error messages in the terminal
5. **One file is enough** - This simple server doesn't need multiple files

---

## 🤝 Need Help?

If you encounter issues:
1. Read the error message carefully
2. Check the Troubleshooting section above
3. Make sure Node.js is properly installed
4. Verify your `server.js` file has no syntax errors

---

## 📄 License

This is a learning project - feel free to use and modify as needed!

---

**Happy Coding! 🚀**