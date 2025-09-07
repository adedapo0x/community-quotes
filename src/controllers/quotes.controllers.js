const Quote = require("../models/quote.models");

async function createQuote(req, res) {
  const { text, author } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Quote text is required" });
  }

  const quote = await Quote.create({
    text: text.trim(),
    author: author && author.trim() !== "" ? author.trim() : undefined,
  });

  res.status(201).json(quote);
}


async function getAllQuotes(req, res) {
  const quotes = await Quote.find().sort({ createdAt: -1 });
  res.json(quotes);
}


async function getRandomQuote(req, res) {
  const [quote] = await Quote.aggregate([{ $sample: { size: 1 } }]);

  if (!quote) {
    return res.status(404).json({ error: "No quotes found" });
  }

  res.json(quote);
}

module.exports = {
  createQuote,
  getAllQuotes,
  getRandomQuote,
};
