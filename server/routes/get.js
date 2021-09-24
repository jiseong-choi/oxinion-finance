const router = require("express").Router();
const Portfolio = require("../models/Portfolio");

router.get("/", async (req, res) => {
  const response = await Portfolio.find({});

  res.status(200).send(response);
});

module.exports = router;
