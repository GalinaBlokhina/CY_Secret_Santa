const { faker } = require("@faker-js/faker");

describe("Create, change, delete a box - API", () => {
  let userPassword = "Test1234";
  let userEmail = "galina-a@yandex.ru";
  let newKey = faker.internet.password(5);
  let newName = faker.word.noun(10);
  let newCookie =
    "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMTEsImlhdCI6MTY4MjYwMjczMSwiZXhwIjoxNjg1MTk0NzMxfQ.AQ572Xk0mzSJyj3j1Rl5in5SdLNu7kJFZsgS9YM5vnM; refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMTEsImlhdCI6MTY4MjYwMjczMSwiZXhwIjoxNjg3Nzg2NzMxfQ.xVKq3dU3n6dP3ipXNovuuAYGuVYcM1bK7ybDT4Suj2E";
  beforeEach(() => {
    cy.request({
      method: "POST",
      headers: {
        Cookie: newCookie,
      },
      url: "/api/login",
      body: { email: userEmail, password: userPassword },
    });
  });
  it("creating a box", () => {
    cy.request({
      method: "POST",
      headers: {
        Cookie: newCookie,
      },
      url: "/api/box",
      body: {
        email: null,
        name: newName,
        key: newKey,
        picture: "lollipop",
        usePost: false,
        useCashLimit: null,
        cashLimit: null,
        cashLimitCurrency: null,
        useWish: true,
        useCircleDraw: null,
        iInviteAfterDraw: null,
        isArchived: null,
        createAdminCard: null,
        isCreated: true,
        useNames: true,
        isPhoneRequired: false,
        logo: null,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.box.key).to.equal(newKey);
      expect(response.body.box.name).to.equal(newName);
    });
  });
  it("change name of a box", () => {
    let newName1 = faker.color;
    cy.request({
      method: "PUT",
      headers: {
        Cookie: newCookie,
      },
      url: `api/box/${newKey}`,
      body: {
        email: null,
        name: newName1,
        key: `${newKey}`,
        picture: "lollipop",
        usePost: false,
        useCashLimit: null,
        cashLimit: null,
        cashLimitCurrency: null,
        useWish: true,
        useCircleDraw: null,
        iInviteAfterDraw: null,
        isArchived: null,
        createAdminCard: null,
        isCreated: true,
        useNames: true,
        isPhoneRequired: false,
        logo: null,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.box.name).to.equal(newName1);
    });
  });
  it("delete box", () => {
    cy.request({
      method: "DELETE",
      url: `api/box/${newKey}`,
    }).then((resp) => {
      expect(resp.status).to.equal(200);
    });
  });
});
