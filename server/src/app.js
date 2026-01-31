const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

module.exports = app;