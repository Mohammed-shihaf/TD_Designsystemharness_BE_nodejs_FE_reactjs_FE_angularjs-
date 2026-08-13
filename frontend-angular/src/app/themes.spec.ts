import { findThemeById, mergeThemeOverrides } from './themes';

describe('findThemeById', () => {
  it('finds a theme by id', () => {
    const themes = [{ id: 'light', name: 'Light', overrides: {} }, { id: 'dark', name: 'Dark', overrides: {} }];
    expect(findThemeById(themes, 'dark')?.name).toBe('Dark');
  });
});

describe('mergeThemeOverrides', () => {
  it('overrides only specified color keys', () => {
    const base = { color: { primary: '#2563eb', background: '#ffffff' } };
    const merged = mergeThemeOverrides(base, { color: { background: '#0f172a' } });
    expect(merged.color.background).toBe('#0f172a');
    expect(merged.color.primary).toBe('#2563eb');
  });
});
