const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "2pbpw2",
  video: false,
  e2e: {
    baseUrl: "https://santa-secret.ru/",
    testIsolation: false,
    pageLoadTimeout: 150000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
