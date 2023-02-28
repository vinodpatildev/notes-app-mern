import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello sheet world!.");
});

export default app;