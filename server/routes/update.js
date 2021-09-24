const router = require("express").Router();
const Portfolio = require("../models/Portfolio");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const update = {
    ticker: req.body.ticker,
    share: req.body.share,
    cost: req.body.cost,
  };

  let doc = await Portfolio.findOneAndUpdate(filter, update);

  res.status(200).send(req.body);
});

module.exports = router;
