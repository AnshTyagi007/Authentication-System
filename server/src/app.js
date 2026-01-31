const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const notFound = require("./middlewares/notFound.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();


// Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

// 404 handler
app.use(notFound);

// Global error handler;
app.use(errorHandler);

module.exports = app;