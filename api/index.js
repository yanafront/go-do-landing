const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, '..', 'dist', 'public')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '..', 'dist', 'public', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not Found');
  }
});

module.exports = app;
