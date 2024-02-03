const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.globalsqa.com",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
});
