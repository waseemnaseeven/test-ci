"use strict";

/**
 * Returns a friendly greeting for the provided name.
 * @param {string} [name="World"] - Name to greet.
 * @returns {string} Greeting message.
 */
function getGreeting(name = "World") {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(getGreeting());
}

module.exports = {
  getGreeting,
};
