require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")

const app = express()

const quoteRoutes = require("./routes/quotes.route");

app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.json({message: "Welcome to Quotes API"})
})

app.use('/quotes', quoteRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo DB connection successful")
    } catch(err){
        console.error("MongoDB connection error", err.message)
        process.exit(1)
    }
}

let server;
const PORT = process.env.PORT || 3000
const startServer = async () => {
    await connectDB()

    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

// Graceful shutdown
const shutdown = async (signal) => {
    console.log(`Received ${signal}. Shutting down gracefully!`)
    //stop accepting new requests
    if (server){
        await new Promise((resolve) => server.close(resolve));
        console.log("HTTP server closed.");
    }

    // close DB
    await mongoose.connection.close(false)
    console.log("MongoDB connection closed")

    process.exit(0)
}

process.on("SIGINT", () => shutdown("SIGINT"));   // e.g. Ctrl+C
process.on("SIGTERM", () => shutdown("SIGTERM")); // e.g. docker stop

startServer()