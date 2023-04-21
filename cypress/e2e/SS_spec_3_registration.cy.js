describe("Secret Santa third test of registration page", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  const validUserData = require("../fixtures/validNewUsers.json");
  validUserData.forEach((validUser) => {
    it(`valid user data ${validUser.userEmail} and ${validUser.userName}`, () => {
      cy.validUserData(validUser.userName, validUser.userEmail);
    });
  });

  const invalidEmailData = require("../fixtures/InvalidEmail.json");
  invalidEmailData.forEach((invalidEmail) => {
    it(`invalid user email ${invalidEmail.userEmail} and ${invalidEmail.userName}`, () => {
      cy.invalidUserEmail(invalidEmail.userName, invalidEmail.userEmail);
    });
  });

  const invalidNameData = require("../fixtures/InvalidName.json");
  invalidNameData.forEach((invalidName) => {
    it(`invalid user name ${invalidName.userName} and ${invalidName.userEmail}`, () => {
      cy.invalidUserName(invalidName.userName, invalidName.userEmail);
    });
  });
});
