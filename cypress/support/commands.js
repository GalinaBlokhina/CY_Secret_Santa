Cypress.Commands.add("visitPages", (selector, url) => {
  cy.get(selector).should("be.visible").click();
  cy.url().should("include", url);
});

Cypress.Commands.add("loginViaUi", (email, password) => {
  cy.visit("/"),
    cy
      .get(
        ".layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med"
      )
      .click(),
    cy.get(":nth-child(3) > .frm").type(email),
    cy.get(":nth-child(4) > .frm").type(password),
    cy.get(".btn-main").click();
});

const regSelectors = require("../fixtures/RegPageSelectors.json");

Cypress.Commands.add("enterUserName", (userName) => {
  cy.get(regSelectors.nameField).type(userName);
});

Cypress.Commands.add("enterUserEmail", (userEmail) => {
  cy.get(regSelectors.emailField).type(userEmail);
});

Cypress.Commands.add("validUserData", (userName, userEmail) => {
  cy.enterUserName(regSelectors.nameField, userName);
  cy.enterUserEmail(regSelectors.emailField, userEmail);
  cy.get(".btn-main").click();
  cy.request("/api/register?redirect=%2F");
  cy.get(regSelectors.emailSent).should("have.text", "Письмо отправлено!");
});

Cypress.Commands.add("invalidUserName", (userName, userEmail) => {
  cy.enterUserName(regSelectors.nameField, userName);
  cy.enterUserEmail(regSelectors.emailField, userEmail);
  cy.get(regSelectors.errorMessage).should("be.visible");
});

Cypress.Commands.add("invalidUserEmail", (userName, userEmail) => {
  cy.enterUserName(regSelectors.nameField, userName);
  cy.enterUserEmail(regSelectors.emailField, userEmail);
  cy.get(regSelectors.nameField).click();
  cy.get(regSelectors.errorMessage).should("be.visible");
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
