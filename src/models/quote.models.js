const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true, 
      trim: true,     
    },
    author: {
      type: String,
      default: "Anonymous", 
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, 
    },
  },
  {
    versionKey: false, 
  }
);

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
