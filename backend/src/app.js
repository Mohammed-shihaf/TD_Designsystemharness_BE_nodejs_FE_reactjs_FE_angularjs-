"use strict";
const express = require("express");
const app = express();
app.use(express.json());

// Design-System Cross-Framework Test Harness: single source of truth
// for design tokens, consumed identically by both the React and
// Angular frontends and parity-tested against each other's render.
const tokens = {
  color: { primary: "#2563eb", danger: "#dc2626", background: "#ffffff" },
  spacing: { sm: "4px", md: "8px", lg: "16px" },
  typography: { fontFamily: "Inter, sans-serif", baseSize: "16px" },
};

app.get("/api/design-tokens", (req, res) => res.json(tokens));
app.get("/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`designsystemharness-backend listening on ${port}`));
}
module.exports = app;
