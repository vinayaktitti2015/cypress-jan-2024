const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);

      on("before:browser:launch", (browser = {}, launchoptions) => {
        if (browser.family === "chromium") {
          launchoptions.args.push("--auto-open-devtools-for-tabs");
          launchoptions.args.push("--incognito");
        }

        if (browser.family === "firefox") {
          launchoptions.args.push("--incognito");
        }

        return launchoptions;
      });
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    specPattern: "cypress/specs/**.*.js",
    env: {
      ENVIRONMENT: "uat",
      CYPRESS_RETRIES: 2,
    },
  },
});
