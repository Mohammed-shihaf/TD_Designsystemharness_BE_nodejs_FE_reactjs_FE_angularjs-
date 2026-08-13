"use strict";
const express = require("express");
const tokensRouter = require("./routes/tokens");
const themesRouter = require("./routes/themes");

const app = express();
app.use(express.json());

app.use("/api/design-tokens", tokensRouter);
app.use("/api/themes", themesRouter);
app.get("/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`designsystemharness-backend listening on ${port}`));
}
module.exports = app;
