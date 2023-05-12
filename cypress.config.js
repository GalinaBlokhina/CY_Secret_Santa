const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  projectId: "2pbpw2",
  e2e: {
    baseUrl: "https://santa-secret.ru/",
    testIsolation: false,
    pageLoadTimeout: 100000,
    watchForFileChanges: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      const bundler = createBundler({
      plugins: [createEsbuildPlugin(config)],
      })
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);

      return config;
    },
  },
  env: {
    email: "galina-a@yandex.ru",
    password: "Test1234",
  },
});
