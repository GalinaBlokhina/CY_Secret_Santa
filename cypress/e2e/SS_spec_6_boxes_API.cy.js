import { faker } from "@faker-js/faker";
describe("create, change, delete boxes - API", () => {
    it("user can create boxes with valid name - API", () => {
    cy.request({
      method: "POST",
      headers: {
        Cookie:
          "_ym_uid=1679912955155588340; _ym_d=1679912955; adtech_uid=71692be2-9d21-4f3f-9970-89553510736e:santa-secret.ru; top100_id=t1.7627570.150864286.1680012737289; fid=b343b0d5-11c1-4381-a8c5-1addb09c9fd9; _ac_oid=7e469849d6f07a8ac59c0c1e7e2abd0a:1680444365530; _pm_=40ltwt96xiu26bhshxmlcelcubavyb8y1y7; last_visit=1682421760190::1682432560190; t3_sid_7627570=s1.2130769007.1682432560184.1682432560441.9.2; _ym_isad=2; pmtimesig=[[1682436657149,0],[1682499852320,63195171],[1682508412408,8560088]]; uuid=4668acbde6cc2c9b:1; __upin=PUz9fPxAIMlAVkOYjPFpDA; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMTEsImlhdCI6MTY4MjUxNzY4OSwiZXhwIjoxNjg1MTA5Njg5fQ.ODcR_BbFZIjidEgpZAKTcWfB7drK4VrwsykMiibeD3g; _buzz_fpc=JTdCJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyRnJpJTJDJTIwMjYlMjBBcHIlMjAyMDI0JTIwMTQlM0ExMCUzQTI3JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU3QiU1QyUyMnZhbHVlJTVDJTIyJTNBJTVDJTIyYWJiMTdlZThmMDc4MWNlYTJmZWMyNmM1ZDUwNzdhN2MlNUMlMjIlMkMlNUMlMjJmcGpzRm9ybWF0JTVDJTIyJTNBdHJ1ZSU3RCUyMiU3RA=="
      },
      url: "https://staging.lpitko.ru/api/login",
      body: {
        email: "galina-a@yandex.ru",
        password: "Test1234",
      },
    });

  let newKey = faker.word.noun;
  let newName = faker.word.noun;

  cy.request({
    method: "POST",
    url: "/api/box",
    headers: {
      Cookie:
        "_ym_uid=1679912955155588340; _ym_d=1679912955; adtech_uid=71692be2-9d21-4f3f-9970-89553510736e:santa-secret.ru; top100_id=t1.7627570.150864286.1680012737289; fid=b343b0d5-11c1-4381-a8c5-1addb09c9fd9; _ac_oid=7e469849d6f07a8ac59c0c1e7e2abd0a:1680444365530; _pm_=40ltwt96xiu26bhshxmlcelcubavyb8y1y7; last_visit=1682421760190::1682432560190; t3_sid_7627570=s1.2130769007.1682432560184.1682432560441.9.2; _ym_isad=2; pmtimesig=[[1682436657149,0],[1682499852320,63195171],[1682508412408,8560088]]; uuid=4668acbde6cc2c9b:1; __upin=PUz9fPxAIMlAVkOYjPFpDA; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMTEsImlhdCI6MTY4MjUxNzY4OSwiZXhwIjoxNjg1MTA5Njg5fQ.ODcR_BbFZIjidEgpZAKTcWfB7drK4VrwsykMiibeD3g; _buzz_fpc=JTdCJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyRnJpJTJDJTIwMjYlMjBBcHIlMjAyMDI0JTIwMTQlM0ExMCUzQTI3JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU3QiU1QyUyMnZhbHVlJTVDJTIyJTNBJTVDJTIyYWJiMTdlZThmMDc4MWNlYTJmZWMyNmM1ZDUwNzdhN2MlNUMlMjIlMkMlNUMlMjJmcGpzRm9ybWF0JTVDJTIyJTNBdHJ1ZSU3RCUyMiU3RA=="
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

