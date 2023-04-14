describe('Secret Santa second test of box, new box, randomizer and account pages', () => {
beforeEach('sign in', () => {
cy.loginViaUi(Cypress.env('email'), Cypress.env('password'))
})
it('boxes page test', () => {
cy.visitPages('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med', 'account/boxes')
})
it('new box page test', () => {
cy.visitPages(':nth-child(5) > .btn-main', 'box/new')
})
it('randomizer page test', () => {
cy.visitPages('[href="/randomizer"] > .btn-secondary', 'randomizer')
})
it('account page test', () => {
cy.visitPages('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text', 'account')
})
})
