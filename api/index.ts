import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import { setupVite, serveStatic, log } from "../server/vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

      log(logLine);
    }
  });

  next();
});

// Register API routes
app.use("/api", registerRoutes());

// Setup Vite for development
if (process.env.NODE_ENV === "development") {
  setupVite(app);
} else {
  // Serve static files in production
  serveStatic(app);
}

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  log(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
