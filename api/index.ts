import express from "express";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const requestPath = req.path;
  let capturedJsonResponse: any = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (requestPath.startsWith("/api")) {
      let logLine = `${req.method} ${requestPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve(process.cwd(), "dist");
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    // Serve index.html for all routes (SPA)
    app.get("*", (req, res) => {
      const indexPath = path.resolve(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).json({ error: "Build files not found" });
      }
    });
  } else {
    // Fallback if dist doesn't exist
    app.get("*", (req, res) => {
      res.status(503).json({ 
        error: "Application not built", 
        message: "Please run 'npm run build' first" 
      });
    });
  }
} else {
  // Development mode - serve a simple message
  app.get("*", (req, res) => {
    res.json({ 
      message: "Development mode - please run 'npm run dev' locally",
      path: req.path 
    });
  });
}

// Error handling middleware
app.use((err: Error, req: any, res: any, next: any) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// 404 handler
app.use((req: any, res: any) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;