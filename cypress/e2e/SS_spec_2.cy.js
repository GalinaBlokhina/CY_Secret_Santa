describe("Secret Santa second test of box, new box, randomizer and account pages", () => {
beforeEach("sign in", () => {
cy.visit("/"),
cy.get(".layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med").click()
  cy.get(":nth-child(3) > .frm").type("galina-a@yandex.ru")
  cy.get(":nth-child(4) > .frm").type("Test1234")
  cy.get(".btn-main").click()
it("visit boxes page, box menu has two items", () => {
cy.visit("account/boxes"),
cy.get('[href="/account/boxes"] > .header-item > .header-item__text > .txt--med').should('be.visible')
})
})

})
