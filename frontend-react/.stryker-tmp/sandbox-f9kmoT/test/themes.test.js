// @ts-nocheck
import { expect } from "chai";
import { mergeThemeOverrides, findThemeById } from "../src/themes.js";

describe("mergeThemeOverrides", () => {
  it("overrides only the specified color keys", () => {
    const base = { color: { primary: "#2563eb", background: "#ffffff" }, spacing: { lg: "16px" } };
    const merged = mergeThemeOverrides(base, { color: { background: "#0f172a" } });
    expect(merged.color.background).to.equal("#0f172a");
    expect(merged.color.primary).to.equal("#2563eb");
    expect(merged.spacing.lg).to.equal("16px");
  });
});

describe("findThemeById", () => {
  it("finds a theme by id", () => {
    const themes = [{ id: "light", name: "Light" }, { id: "dark", name: "Dark" }];
    expect(findThemeById(themes, "dark").name).to.equal("Dark");
  });
});
