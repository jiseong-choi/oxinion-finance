const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true,
  },
  share: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
