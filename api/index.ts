import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
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
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve(process.cwd(), "dist");
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    // Serve index.html for all routes (SPA)
    app.get("*", (req: Request, res: Response) => {
      const indexPath = path.resolve(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).json({ error: "Build files not found" });
      }
    });
  } else {
    // Fallback if dist doesn't exist
    app.get("*", (req: Request, res: Response) => {
      res.status(503).json({ 
        error: "Application not built", 
        message: "Please run 'npm run build' first" 
      });
    });
  }
} else {
  // Development mode - serve a simple message
  app.get("*", (req: Request, res: Response) => {
    res.json({ 
      message: "Development mode - please run 'npm run dev' locally",
      path: req.path 
    });
  });
}

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
