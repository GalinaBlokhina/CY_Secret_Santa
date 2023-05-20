import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const author = require("../../fixtures/author.json");
Given("user is on Secret Santa login page", function () {
  cy.visit("/login");
});

When("user logs in", function () {
  cy.login(author.email, author.password);
});

Then("user is on dashboard page", function () {
  cy.contains("Создать коробку").click();
});
