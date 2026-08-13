export function mergeThemeOverrides(baseTokens, overrides) {
  return {
    ...baseTokens,
    color: { ...baseTokens.color, ...(overrides.color || {}) },
  };
}

export function findThemeById(themes, id) {
  return themes.find((t) => t.id === id);
}
