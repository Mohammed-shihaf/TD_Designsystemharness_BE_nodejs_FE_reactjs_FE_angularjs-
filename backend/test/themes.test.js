"use strict";
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /api/themes", () => {
  it("lists theme presets", async () => {
    const res = await request(app).get("/api/themes");
    expect(res.body.themes).to.have.lengthOf(2);
  });
});

describe("GET /api/themes/:id", () => {
  it("returns a single theme's overrides", async () => {
    const res = await request(app).get("/api/themes/dark");
    expect(res.body.overrides.color.background).to.equal("#0f172a");
  });

  it("404s for an unknown theme", async () => {
    const res = await request(app).get("/api/themes/nope");
    expect(res.status).to.equal(404);
  });
});
