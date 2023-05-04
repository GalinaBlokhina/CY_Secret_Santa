const users = require("../fixtures/Users.json");
const boxPage = require("../fixtures/boxPage.json");
const generalElements = require("../fixtures/General.json");
const dashboardPage = require("../fixtures/dashboard.json");
const invitePage = require("../fixtures/invitePage.json");
import { faker } from "@faker-js/faker";
describe("user can create a box and run it", () => {
  let newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
  let maxAmount = 50;
  let currency = "Евро";
  let inviteLink;
  it("user logins and creates a box", () => {
    cy.visit("/login");
    cy.login(users.userAuthor.email, users.userAuthor.password);
    cy.contains("Создать коробку").click();
    cy.get(boxPage.boxNameField).type(newBoxName);
    cy.get(generalElements.arrowRight).click();
    cy.get(boxPage.icon12).click();
    cy.get(generalElements.arrowRight).click();
    cy.get(boxPage.giftPriceToggle).check({ force: true });
    cy.get(boxPage.maxAmount).type(maxAmount);
    cy.get(boxPage.currency).select(currency);
    cy.get(generalElements.arrowRight).click();
    cy.get(generalElements.arrowRight).click();
    cy.get(generalElements.arrowRight).click()
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
    cy.participantsQuestionnaire()
  })
  it.skip("approve as user2", () => {
    cy.visit(inviteLink);
    cy.get(generalElements.submitButton).click();
    cy.contains("войдите").click();
    cy.login(users.user2.email, users.user2.password);
    cy.participantsQuestionnaire()
  })
  it.skip("approve as user3", () => {
    cy.visit(inviteLink);
    cy.get(generalElements.submitButton).click();
    cy.contains("войдите").click();
    cy.login(users.user3.email, users.user3.password);
    cy.participantsQuestionnaire()
  })

  Cypress._.times(10, () => {
  describe('Description', () => {
  it.skip("delete boxes", () => {
      cy.visit("/login");
      cy.login(users.userAuthor.email, users.userAuthor.password);
      cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med').click()
      cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__info-wrapper > .user-card__name > .txt--med').click()
      cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary > .header-secondary > .header-secondary__right-item > .toggle-menu-wrapper > .toggle-menu-button > .toggle-menu-button--inner > .svg > svg > [d="M12 14.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"]').click({ force: true })
      cy.contains('Архивация и удаление').click({ force: true })
      cy.get(':nth-child(2) > .form-page-group__main > .frm-wrapper > .frm').type('Удалить коробку')
      cy.get('.btn-service').click()
    })
  })
})
})
