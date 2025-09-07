require("dotenv").config();
const mongoose = require("mongoose");
const Quote = require("../src/models/Quote");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
      { text: "Oooh, to be a man"} 
    ];

    await Quote.deleteMany(); // clear existing
    await Quote.insertMany(quotes);

    console.log("Database seeded with sample quotes!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err.message);
    process.exit(1);
  }
}

seed();
