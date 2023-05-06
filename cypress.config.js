const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2pbpw2",
  e2e: {
    baseUrl: 'https://staging.lpitko.ru',
    testIsolation: false,
    pageLoadTimeout: 100000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
  email: 'galina-a@yandex.ru',
  password: 'Test1234'
 }
});

