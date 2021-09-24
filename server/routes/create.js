const router = require("express").Router();
const Portfolio = require("../models/Portfolio");

router.post("/", async (req, res) => {
  const response = await new Portfolio({
    ticker: req.body.ticker,
    share: req.body.share,
    cost: req.body.cost,
  }).save();

  res.status(200).send(response);
});

module.exports = router;
