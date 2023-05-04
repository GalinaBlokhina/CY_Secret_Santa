Cypress.Commands.add("visitPages", (selector, url) => {
  cy.get(selector).should("be.visible").click();
  cy.url().should("include", url);
});

Cypress.Commands.add("loginViaUi", (email, password) => {
  cy.visit("/login"),
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
  cy.enterUserName(userName);
  cy.enterUserEmail(userEmail);
  cy.get(".btn-main").click();
  cy.request("/api/register?redirect=%2F");
  cy.get(regSelectors.emailSent).should("have.text", "Письмо отправлено!");
});

Cypress.Commands.add("invalidUserName", (userName, userEmail) => {
  cy.enterUserName(userName);
  cy.enterUserEmail(userEmail);
  cy.get(regSelectors.errorMessage).should("be.visible");
});

Cypress.Commands.add("invalidUserEmail", (userName, userEmail) => {
  cy.enterUserName(userName);
  cy.enterUserEmail(userEmail);
  cy.get(regSelectors.nameField).click();
  cy.get(regSelectors.errorMessage).should("be.visible");
});

const loginSelectors = require("../fixtures/LoginPageSelectors.json");
const generalElements = require("../fixtures/General.json")
Cypress.Commands.add("validLogin", (userEmail, userPassword) => {
  cy.get(loginSelectors.emailField).type(userEmail);
  cy.get(loginSelectors.passwordField).type(userPassword);
  cy.get(".btn-main").click();
  cy.url().should("equal", "https://santa-secret.ru/");
});

Cypress.Commands.add("invalidLogin", (userEmail, userPassword) => {
  cy.get(loginSelectors.emailField).type(userEmail);
  cy.get(loginSelectors.passwordField).type(userPassword);
  cy.get(".btn-main").click();
  cy.get(loginSelectors.errorMessage).should("be.visible");
});

Cypress.Commands.add("changePassword", (userName, newPassword) => {
  cy.contains(userName).click({ force: true });
  cy.get(".layout-column-start > :nth-child(1) > .frm").type(newPassword);
  cy.get(
    ":nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm"
  ).type(newPassword);
  cy.get(".layout-row-end > .btn-service").click();
})

Cypress.Commands.add("login", (userName, password) => {
  cy.get(loginSelectors.emailField).type(userName);
  cy.get(loginSelectors.passwordField).type(password);
  cy.get(generalElements.submitButton).click();
})

const inviteeBoxPage = require('../fixtures/inviteeBoxPage')
const inviteeDashBoard = require('../fixtures/inviteeDashboardPage')
import { faker } from "@faker-js/faker";
let wishes = faker.word.adjective() + " "+ faker.word.noun()
Cypress.Commands.add("participantsQuestionnaire", () => {
  cy.contains('Создать карточку участника').should("exist")
    cy.get(generalElements.submitButton).click();
    cy.get(generalElements.arrowRight).click();
    cy.get(generalElements.arrowRight).click();
    cy.get(inviteeBoxPage.wishesElement).type(wishes)
    cy.get(generalElements.arrowRight).click();
    cy.get(inviteeDashBoard.noticeForInvitee).invoke("text").then((text)=> {
    expect(text).to.contain('Это — анонимный чат с вашим Тайным Сантой')
    })
    cy.clearCookies()
})


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
