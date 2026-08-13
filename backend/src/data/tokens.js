"use strict";
const tokens = {
  color: { primary: "#2563eb", danger: "#dc2626", background: "#ffffff" },
  spacing: { sm: "4px", md: "8px", lg: "16px" },
  typography: { fontFamily: "Inter, sans-serif", baseSize: "16px" },
};

function getAllTokens() {
  return tokens;
}

module.exports = { getAllTokens };
