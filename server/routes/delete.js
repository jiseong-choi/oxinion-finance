const router = require("express").Router();
const Portfolio = require("../models/Portfolio");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  let doc = await Portfolio.deleteOne(filter);

  res.status(200).send(req.body);
});

module.exports = router;
