//import { faker } from '@faker-js/faker';

describe('Create a box API', () => {
  let userPassword = 'Test1234';
  let userEmail = 'galina-a@yandex.ru';
  //let newKey = faker.word.noun
  //let newName = faker.word.noun
  let newCookie = 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMTEsImlhdCI6MTY4MjYwMjczMSwiZXhwIjoxNjg1MTk0NzMxfQ.AQ572Xk0mzSJyj3j1Rl5in5SdLNu7kJFZsgS9YM5vnM; refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMTEsImlhdCI6MTY4MjYwMjczMSwiZXhwIjoxNjg3Nzg2NzMxfQ.xVKq3dU3n6dP3ipXNovuuAYGuVYcM1bK7ybDT4Suj2E'
  beforeEach(() => {
    cy.request({
        method: 'POST',
        headers: {
          Cookie: newCookie
        },
        url: 'https://santa-secret.ru/api/login',
        body: { email: userEmail, password: userPassword },
      });
    });
  it('creating a box', () => {
    cy.request({
          method: 'POST',
          headers: {
            Cookie: newCookie
          },
          url: 'https://santa-secret.ru/api/box',
          body: {
            email: null,
            name: "Новая коробка",
            key: "А12345",
            picture: 'cup_one',
            usePost: false,
            useCashLimit: null,
            cashLimit: null,
            cashLimitCurrency: null,
            useWish: true,
            useCircleDraw: null,
            isInviteAfterDraw: null,
            isArchived: null,
            createAdminCard: null,
            isCreated: true,
            useNames: true,
            isPhoneRequired: false,
            logo: null,
          }
        }).then((response) => {
        expect(response.status).to.equal(200);
     })

})
})