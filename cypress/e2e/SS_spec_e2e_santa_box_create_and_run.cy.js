const users = require("../fixtures/Users.json");
const author = require("..//fixtures/author.json");
const boxPage = require("../fixtures/boxPage.json");
const generalElements = require("../fixtures/General.json");
const dashboardPage = require("../fixtures/dashboard.json");
const invitePage = require("../fixtures/invitePage.json");
const createdBoxPage = require("../fixtures/createdBoxPage.json");
import { faker } from "@faker-js/faker";
describe("user can create a box and run it", () => {
  let newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
  let newBoxKey = faker.word.adjective({ length: { min: 5, max: 10 } });
  let maxAmount = 50;
  let currency = "Евро";
  let inviteLink;
  it("user logins and creates a box", () => {
    cy.visit("/login");
    cy.login(author.email, author.password);
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
  it("add participants", () => {
    cy.get(generalElements.submitButton).click();
    cy.get(invitePage.inviteLink)
      .invoke("text")
      .then((link) => {
        inviteLink = link;
      });
    cy.clearCookies();
  });

  it("approve as user1", () => {
    cy.visit(inviteLink);
    cy.get(generalElements.submitButton).click();
    cy.contains("войдите").click();
    cy.login(users.user1.email, users.user1.password);
    cy.participantsQuestionnaire();
  });
  it("approve as user2", () => {
    cy.visit(inviteLink);
    cy.get(generalElements.submitButton).click();
    cy.contains("войдите").click();
    cy.login(users.user2.email, users.user2.password);
    cy.participantsQuestionnaire();
  });
  it("approve as user3", () => {
    cy.visit(inviteLink);
    cy.get(generalElements.submitButton).click();
    cy.contains("войдите").click();
    cy.login(users.user3.email, users.user3.password);
    cy.participantsQuestionnaire();
    cy.wait(100)
  });
  it("author logins and runs randomiser", () => {
    cy.visit("/login");
    cy.login(author.email, author.password);
    cy.wait(200)
    cy.visit(`/box/${newBoxKey}`);
    cy.contains('Перейти к жеребьевке').click({force:true});
    cy.get(generalElements.submitButton).click({force:true});
    cy.get(".txt-h2")
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Проведение жеребьевки");
      });
    cy.contains("Да, провести жеребьевку").click({force:true});
    cy.get(".picture-notice__title")
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Жеребьевка проведена");
      });
    cy.clearCookies();
  });

  it("participant1 gets notification", () => {
    cy.participantsNotification(users.user1.email, users.user1.password);
  });
  it("participant2 gets notification", () => {
    cy.participantsNotification(users.user2.email, users.user2.password);
  });
  it("participant3 gets notification", () => {
    cy.participantsNotification(users.user3.email, users.user3.password);
  });
  it("delete box", () => {
    cy.request({
      method: "POST",
      url: "/api/login",
      body: { email: author.email, password: author.password },
    });
    cy.request({
      method: "DELETE",
      url: `api/box/${newBoxKey}`,
    }).then((resp) => {
      expect(resp.status).to.equal(200);
    });
  });
});
