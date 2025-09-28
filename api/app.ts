import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  const fs = require("fs");
  
  const distPath = path.resolve(process.cwd(), "dist");
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    app.get("*", (req, res) => {
      const indexPath = path.resolve(distPath, "index.html");
      res.sendFile(indexPath);
    });
  } else {
    app.get("*", (req, res) => {
      res.status(503).json({ error: "Not built" });
    });
  }
} else {
  app.get("*", (req, res) => {
    res.json({ message: "Dev mode" });
  });
}

export default app;
