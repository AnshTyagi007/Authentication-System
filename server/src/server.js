require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect DB before starting server
connectDB();

const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

process.on("SIGTERM", () => {
    console.log("SIGTERM recieved. Shutting down gracefully...");
    server.close(() => {
        console.log("Process terminated");
    });
});