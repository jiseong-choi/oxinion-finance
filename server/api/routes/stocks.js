const express = require("express");

const router = express.Router();
const Stock = require("../models/Stock");

// GET BACK ALL STOCKS
router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {}
});

// CREATE A NEW STOCK
router.post("/", async (req, res) => {
  const stock = new Stock({
    name: req.body.name,
    ticker: req.body.ticker,
    divHistory: req.body.divHistory,
    paymentMonth: req.body.paymentMonth,
    sector: req.body.sector,
    website: req.body.website,
  });

  try {
    const savedStock = await stock.save();
    res.json(savedStock);
  } catch (err) {
    res.json({ message: err });
  }
});

// READ(GET) A SPECIFIC STOCK
router.get("/:ticker", async (req, res) => {
  try {
    const stock = await Stock.findOne({ ticker: req.params.ticker });
    res.json(stock);
  } catch (err) {
    res.json({ message: "We will add your request to our DB soon!" });
  }
});

// UPDATE A SPECIFIC STOCK
// PUT or PATCH. Put is for update for everything while PATCH is for a specific field
router.patch("/:ticker", async (req, res) => {
  try {
    const updatedStock = await Stock.updateOne(
      { ticker: req.params.ticker },
      { $set: { name: req.body.name } }
    );
    res.json(updatedStock);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETES A SPECIFIC STOCK
router.delete("/:ticker", async (req, res) => {
  try {
    const removeStock = await Stock.remove(
      { ticker: req.params.ticker },
      (err) => {}
    );

    res.json(removeStock);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
