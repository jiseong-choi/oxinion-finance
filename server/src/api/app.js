const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors POLICY
app.use(cors());

// Import Routes
const stocksRoute = require("./routes/stocks");

app.use("/stocks", stocksRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to DividendDB API page. Please read the doc");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to DB!")
);

app.listen(PORT);
