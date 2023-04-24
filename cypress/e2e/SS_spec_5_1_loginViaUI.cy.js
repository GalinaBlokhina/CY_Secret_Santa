import { faker } from "@faker-js/faker";
import { LoginPage } from "../Pages/loginPage";
import { MainPage } from "../Pages/mainPage";

describe("login via UI and change password", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("user can't login with an old password", () => {
    let loginPage = new LoginPage();
    let mainPage = new MainPage();
    let oldPassword = "Test1234";
    let newPassword = faker.internet.password(10);
    loginPage.login("galina-a@yandex.ru", oldPassword);
    cy.changePassword("Галина", newPassword);
    cy.contains("Выйти с сайта").click();
    mainPage.goToLoginPage();
    loginPage.login("galina-a@yandex.ru", oldPassword);
    cy.get(".hint > .txt-secondary").should("exist");
    loginPage.retypePassword(newPassword);
    cy.get('.home-page-buttons > [href="/box/new"] > .btn-main').should(
      "exist"
    );
    cy.changePassword("Галина", oldPassword);
  });
});
