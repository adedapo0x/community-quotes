const express = require("express");
const router = express.Router();


const { createQuote, getAllQuotes, getRandomQuote }  = require("../controllers/quotes.controllers");

router.post("/", createQuote);

router.get("/", getAllQuotes);

router.get("/random", getRandomQuote);

module.exports = router;



