const express = require('express');

const app = express();

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Simple HTML response for all routes
app.get('*', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GoDo - Работа и исполнители за пару кликов в Telegram</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0; 
      padding: 20px; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container { 
      text-align: center; 
      color: white; 
      max-width: 600px;
    }
    h1 { 
      font-size: 3rem; 
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    p { 
      font-size: 1.2rem; 
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    .btn {
      display: inline-block;
      background: white;
      color: #667eea;
      padding: 15px 30px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      margin: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    .btn:hover {
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 GoDo</h1>
    <p>Платформа для быстрого заработка и поиска исполнителей в Telegram</p>
    <p>Зарабатывай сегодня или найди работника прямо сейчас!</p>
    <a href="https://t.me/proxiDBot" class="btn">Перейти в бот</a>
    <a href="/api/health" class="btn">Проверить API</a>
  </div>
</body>
</html>
  `);
});

module.exports = app;
