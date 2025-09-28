import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    message: "GoDo API is running"
  });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  const fs = require("fs");
  
  const distPath = path.resolve(process.cwd(), "dist");
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    // SPA fallback - serve index.html for all routes
    app.get("*", (req, res) => {
      const indexPath = path.resolve(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).json({ error: "Build files not found" });
      }
    });
  } else {
    app.get("*", (req, res) => {
      res.status(503).json({ 
        error: "Application not built", 
        message: "Please run 'npm run build' first" 
      });
    });
  }
} else {
  // Development mode
  app.get("*", (req, res) => {
    res.json({ 
      message: "Development mode - please run 'npm run dev' locally",
      path: req.path 
    });
  });
}

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
