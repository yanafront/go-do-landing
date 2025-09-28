import express from "express";

const app = express();

app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  console.log("Health check requested");
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    message: "GoDo API is running"
  });
});

// Main handler
app.get("*", (req, res) => {
  console.log("Request received:", req.path);
  
  if (process.env.NODE_ENV === "production") {
    const path = require("path");
    const fs = require("fs");
    
    const distPath = path.resolve(process.cwd(), "dist");
    console.log("Dist path:", distPath);
    console.log("Dist exists:", fs.existsSync(distPath));
    
    if (fs.existsSync(distPath)) {
      const indexPath = path.resolve(distPath, "index.html");
      console.log("Index path:", indexPath);
      console.log("Index exists:", fs.existsSync(indexPath));
      
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).json({ error: "index.html not found" });
      }
    } else {
      res.status(503).json({ error: "dist folder not found" });
    }
  } else {
    res.json({ 
      message: "Development mode", 
      path: req.path,
      env: process.env.NODE_ENV 
    });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error", details: err.message });
});

export default app;