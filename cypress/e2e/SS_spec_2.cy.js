describe('Secret Santa second test of box, new box, randomizer and account pages', () => {
beforeEach('sign in', () => {
cy.visit('/'),
cy.get(".layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med").click()
  cy.get(':nth-child(3) > .frm').type('galina-a@yandex.ru')
  cy.get(':nth-child(4) > .frm').type('Test1234')
  cy.get('.btn-main').click()
})
it('boxes page test', () => {
  cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med').should('be.visible')
  cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med').click()
cy.url().should('include', 'account/boxes')
})
it('new box page test', () => {
cy.get(':nth-child(5) > .btn-main').should('be.visible')
cy.get(':nth-child(5) > .btn-main').click()
cy.url().should('include', 'box/new')
})
it('randomizer page test', () => {
cy.get('[href="/randomizer"] > .btn-secondary').should('be.visible')
cy.get('[href="/randomizer"] > .btn-secondary').click()
cy.url().should('include', 'randomizer')
})
it('account page test', () => {
cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text').should('be.visible')
cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text').click()
cy.url().should('include', 'account')
})
})
