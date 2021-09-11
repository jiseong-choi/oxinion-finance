const express = require("express");

const app = express();

//Middlewares
// app.use("/api/stocks", () => {
//   console.log("middleware running");
// });

// ROUTES
app.get("/api", (req, res) => {
  res.send("We are api home");
});

app.get("/api/stocks", (req, res) => {
  res.send("We are on stock api page");
});

app.listen(3000);
