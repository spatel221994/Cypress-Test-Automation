import { defineConfig } from "cypress";
import mochawesome from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  allowCypressEnv: false,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "QA Automation Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: "https://qa-case-study-env-e8acgpfpgzegf2dv.westeurope-01.azurewebsites.net/#",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mochawesome(on);
      return config;
    },
  },
});
