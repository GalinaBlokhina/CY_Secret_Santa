import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
let newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
let newBoxKey = faker.word.adjective({ length: { min: 5, max: 10 } });
let maxAmount = 50;
let currency = "Евро";
let inviteLink;
const author = require("../../fixtures/author.json");
const boxPage = require("../../fixtures/boxPage.json");
const generalElements = require("../../fixtures/General.json");
const dashboardPage = require("../../fixtures/dashboard.json");
const invitePage = require("../../fixtures/invitePage.json");
const users = require("../../fixtures/Users.json");

Given(
  "user logs in on Secret Santa login page with data table",
  function (dataTable) {
    cy.visit("/login");
    cy.login(dataTable.hashes()[0].login, dataTable.hashes()[0].password);
    cy.wait(200);
  }
);

Then("user creates a box", function () {
  cy.contains("Создать коробку").click();
  cy.get(boxPage.boxNameField).type(newBoxName);
  cy.get(boxPage.boxKeyField).clear().type(newBoxKey);
  cy.get(generalElements.arrowRight).click();
  cy.get(boxPage.icon12).click();
  cy.get(generalElements.arrowRight).click();
  cy.get(boxPage.giftPriceToggle).check({ force: true });
  cy.get(boxPage.maxAmount).type(maxAmount);
  cy.get(boxPage.currency).select(currency);
  cy.get(generalElements.arrowRight).click();
  cy.get(generalElements.arrowRight).click();
  cy.get(dashboardPage.createdBoxName).should("have.text", newBoxName);
  cy.get(".layout-1__header-wrapper-fixed .toggle-menu-item span")
    .invoke("text")
    .then((text) => {
      expect(text).to.include("Участники");
      expect(text).to.include("Моя карточка");
      expect(text).to.include("Подопечный");
    });
});

Then("user gets an invitation link", function () {
  cy.get(generalElements.submitButton).click();
  cy.get(invitePage.inviteLink)
    .invoke("text")
    .then((link) => {
      inviteLink = link;
    });
  cy.clearCookies();
});

Then("participant enters via invitation link", function () {
  cy.visit(inviteLink);
  cy.get(generalElements.submitButton).click();
  cy.contains("войдите").click();
});

Then("participant1 logs in", function (dataTable) {
  cy.login(dataTable.hashes()[0].login, dataTable.hashes()[0].password);
});

Then("participant2 logs in", function (dataTable) {
  cy.login(dataTable.hashes()[0].login, dataTable.hashes()[0].password);
});

Then("participant3 logs in", function (dataTable) {
  cy.login(dataTable.hashes()[0].login, dataTable.hashes()[0].password);
});

Then("participant fills in participant's questionnaire", function () {
  cy.participantsQuestionnaire();
});

Then("user runs a draw", function () {
  cy.visit(`/box/${newBoxKey}`);
  cy.contains("Перейти к жеребьевке").click({ force: true });
  cy.get(generalElements.submitButton).click({ force: true });
  cy.get(".txt-h2")
    .invoke("text")
    .then((text) => {
      expect(text).to.include("Проведение жеребьевки");
    });
  cy.contains("Да, провести жеребьевку").click({ force: true });
  cy.get(".picture-notice__title")
    .invoke("text")
    .then((text) => {
      expect(text).to.include("Жеребьевка проведена");
    });
  cy.clearCookies();
});

Then("participant1 gets notification", function () {
  cy.participantsNotification(users.user1.email, users.user1.password);
});

Then("participant2 gets notification", function () {
  cy.participantsNotification(users.user2.email, users.user2.password);
});

Then("participant3 gets notification", function () {
  cy.participantsNotification(users.user3.email, users.user3.password);
});

Then("user logins via API", function () {
  cy.request({
    method: "POST",
    url: "/api/login",
    body: { email: author.email, password: author.password },
  });
});

Then("user deletes the box", function () {
  cy.request({
    method: "DELETE",
    url: `api/box/${newBoxKey}`,
  }).then((resp) => {
    expect(resp.status).to.equal(200);
  });
});
