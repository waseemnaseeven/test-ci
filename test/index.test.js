"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");

const { getGreeting } = require("../src/index.js");

test("returns default greeting", () => {
  assert.equal(getGreeting(), "Hello, World!");
});

test("returns personalized greeting", () => {
  assert.equal(getGreeting("CI"), "Hello, CI!");
});
