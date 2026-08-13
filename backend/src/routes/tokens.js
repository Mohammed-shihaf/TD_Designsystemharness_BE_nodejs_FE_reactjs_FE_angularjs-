"use strict";
const express = require("express");
const { getAllTokens } = require("../data/tokens");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllTokens());
});

module.exports = router;
