const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2pbpw2",
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    email: 'blokhinagalina2021@gmail.com',
    password: 'Test123456'
   }
});
