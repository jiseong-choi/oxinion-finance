const express = require("express");
const app = express();
require("dotenv").config();

//Middlewares
// app.use("/api/stocks", () => {
//   console.log("middleware running");
// });

// ROUTES
app.get("/", (req, res) => {
  res.send("Feel like a home");
});

app.get("/api", (req, res) => {
  res.send("OXINION Finance API doc page");
});

app.get("/api/stocks", (req, res) => {
  res.send("We are on stock api page");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port: " + process.env.PORT);
});
