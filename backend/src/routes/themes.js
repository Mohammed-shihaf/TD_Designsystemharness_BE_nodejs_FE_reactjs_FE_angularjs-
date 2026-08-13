"use strict";
const express = require("express");
const { listThemes, getTheme } = require("../data/themes");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ themes: listThemes() });
});

router.get("/:id", (req, res) => {
  const theme = getTheme(req.params.id);
  if (!theme) return res.status(404).json({ error: "theme not found" });
  res.json(theme);
});

module.exports = router;
