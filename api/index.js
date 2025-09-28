const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  console.log('Health check endpoint hit');
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Try different paths for static files
const possiblePaths = [
  path.join(__dirname, '..', 'dist', 'public'),
  path.join(__dirname, '..', 'dist'),
  path.join(__dirname, 'dist', 'public'),
  path.join(__dirname, 'dist')
];

let staticPath = null;
for (const possiblePath of possiblePaths) {
  console.log(`Checking path: ${possiblePath}`);
  if (fs.existsSync(possiblePath)) {
    console.log(`Found static files at: ${possiblePath}`);
    staticPath = possiblePath;
    break;
  }
}

if (staticPath) {
  app.use(express.static(staticPath));
  console.log(`Serving static files from: ${staticPath}`);
} else {
  console.error('No static files found in any expected location');
}

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  console.log(`SPA fallback for: ${req.url}`);
  
  const possibleIndexPaths = [
    path.join(__dirname, '..', 'dist', 'public', 'index.html'),
    path.join(__dirname, '..', 'dist', 'index.html'),
    path.join(__dirname, 'dist', 'public', 'index.html'),
    path.join(__dirname, 'dist', 'index.html')
  ];
  
  for (const indexPath of possibleIndexPaths) {
    console.log(`Checking index.html at: ${indexPath}`);
    if (fs.existsSync(indexPath)) {
      console.log(`Serving index.html from: ${indexPath}`);
      return res.sendFile(indexPath);
    }
  }
  
  console.error('index.html not found in any expected location');
  res.status(404).send('Not Found: index.html');
});

module.exports = app;
