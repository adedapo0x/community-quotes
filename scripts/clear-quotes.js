require("dotenv").config();
const mongoose = require("mongoose");
const Quote = require("../src/models/Quote");

async function clear() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Quote.deleteMany();
    console.log("All quotes cleared!");

    process.exit(0);
  } catch (err) {
    console.error("Clear failed:", err.message);
    process.exit(1);
  }
}

clear();
