"use strict";

const fs = require("node:fs");
const path = require("node:path");

const changelogPath = path.join(__dirname, "..", "CHANGELOG.md");
const HEADER = "# Changelog";
const INTRO_LINES = [
  "All notable changes to this project will be documented in this file.",
  "This project follows Conventional Commits (https://www.conventionalcommits.org/).",
];

const content = fs.existsSync(changelogPath)
  ? fs.readFileSync(changelogPath, "utf8")
  : "";

if (!content.startsWith(HEADER)) {
  const prefix = `${HEADER}\n\n${INTRO_LINES.join("\n")}\n\n`;
  const updated = content.trim().length > 0 ? `${prefix}${content}` : prefix;
  fs.writeFileSync(changelogPath, `${updated.trimEnd()}\n`);
}
