import { faker } from "@faker-js/faker";
describe("create, change, delete boxes - API", () => {
  var connectSIDcookie = "";
  it("user can create boxes with valid name - API", () => {
    let fakeCookie = "connect.sid=" + faker.random.alphaNumeric(82);
    cy.request({
      method: "POST",
      headers: {},
      url: "https://staging.lpitko.ru/api/login",
      body: {
        email: "galina-a@yandex.ru",
        password: "Test1234",
      },
    }).then((response) => {
      let cookie = response.requestHeaders["cookie"];
      let arrayofcookies = cookie.split(";");
      connectSIDcookie = arrayofcookies[arrayofcookies.length - 1];
    });

    let newKey = faker.word.noun;
    let newName = faker.word.noun;

    cy.request({
      method: "POST",
      url: "/api/box",
      headers: {
        Cookie: fakeCookie,
      },
      body: {
        cashLimit: null,
        cashLimitCurrency: null,
        createAdminCard: null,
        email: null,
        isArchived: null,
        isCreated: true,
        isInviteAfterDraw: null,
        isPhoneRequired: false,
        key: newKey,
        logo: null,
        name: newName,
        picture: "cup_cake",
        useCashLimit: null,
        useCircleDraw: null,
      },
    }).then((response) => {
      expect(response.status).to.equal(200),
        expect(response.body.box.key).to.equal(newKey);
      expect(response.body.box.name).to.equal(newName);
    });
  });
});

