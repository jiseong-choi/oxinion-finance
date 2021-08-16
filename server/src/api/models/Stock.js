const mongoose = require("mongoose");

let history = mongoose.Schema({
  exDate: Date,
  paymentDate: Date,
  cashAmount: Number,
});

const StockSchema = mongoose.Schema({
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  divHistory: { type: [history] },
  paymentMonth: { type: Array, default: [] },
  sector: { type: String, default: "" },
  website: { type: String, default: "" },
});

module.exports = mongoose.model("Stocks", StockSchema);
