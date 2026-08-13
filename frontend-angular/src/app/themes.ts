export interface Theme {
  id: string;
  name: string;
  overrides: { color?: Record<string, string> };
}

export function findThemeById(themes: Theme[], id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}

export function mergeThemeOverrides<T extends { color: Record<string, string> }>(base: T, overrides: { color?: Record<string, string> }): T {
  return { ...base, color: { ...base.color, ...(overrides.color || {}) } };
}
