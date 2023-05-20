describe("Secret Santa fourth test of login page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("valid login", () => {
    cy.validLogin("galina-a@yandex.ru", "Test1234");
  });

  const invalidLoginData = require("../../fixtures/InvalidLoginData.json");
  invalidLoginData.forEach((invalidEntry) => {
    it(`invalid login with ${invalidEntry.userEmail} and ${invalidEntry.userPassword}`, () => {
      cy.invalidLogin(invalidEntry.userEmail, invalidEntry.userPassword);
    });
  });
});
