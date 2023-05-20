const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: "2pbpw2",
  video: false,
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    pageLoadTimeout: 100000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    email: 'blokhinagalina2021@gmail.com',
    password: 'Test123456'
   }
});
