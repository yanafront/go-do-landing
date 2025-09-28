import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (req, res) => {
  res.json({ 
    message: "GoDo Landing Page",
    path: req.path,
    timestamp: new Date().toISOString()
  });
});

export default app;