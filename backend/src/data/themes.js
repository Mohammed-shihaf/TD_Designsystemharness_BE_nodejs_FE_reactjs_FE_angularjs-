"use strict";
// Real theme presets - alternate token overrides a consumer can switch
// to, distinct from the base tokens resource above.
const themes = [
  { id: "light", name: "Light", overrides: { color: { primary: "#2563eb", background: "#ffffff" } } },
  { id: "dark", name: "Dark", overrides: { color: { primary: "#3b82f6", background: "#0f172a" } } },
];

function listThemes() {
  return themes;
}

function getTheme(id) {
  return themes.find((t) => t.id === id);
}

module.exports = { listThemes, getTheme };
