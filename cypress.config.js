const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  watchForFileChanges: false,
  defaultCommandTimeout: 29000,
  e2e: {
    baseUrl: "https://qa-assignment.stagingdesigner.com/",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
