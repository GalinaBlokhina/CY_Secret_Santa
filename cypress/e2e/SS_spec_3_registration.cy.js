//const invalidEmailData = require("../fixtures/InvalidEmail.json")
describe("Secret Santa third test of registration page", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  const validUserData = require("../fixtures/validNewUsers.json");
  validUserData.forEach((validUser) => {
    it(`valid user data ${validUser.userEmail} and ${validUserData.userName}`, () => {
      cy.validUserData(validUser.userEmail, validUserData.userName);
    });
  });

  //it('invalid user email', () => {

  //})
  //it('invalid user name', () => {

  //})
});
