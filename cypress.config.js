const { defineConfig } = require("cypress");
//const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
//const createEsbuildPlugin =
  //require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
//const addCucumberPreprocessorPlugin =
  //require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
    viewportWidth: 1280,
    viewportHeight: 800,
  projectId: "2pbpw2",
  video: false,
  e2e: {
    baseUrl: "https://santa-secret.ru/",
    testIsolation: false,
    pageLoadTimeout: 100000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      //const bundler = createBundler({
      //plugins: [createEsbuildPlugin(config)],
      //}

      //on("file:preprocessor", bundler);
      //addCucumberPreprocessorPlugin(on, config);

      //return config;
    },
  },
  env: {
    email: "galina-a@yandex.ru",
    password: "Test1234"
  },
});
