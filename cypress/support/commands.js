Cypress.Commands.add('visitPages', (selector, url) => { 
    cy.get(selector).should('be.visible')
    .click()
    cy.url().should('include', url)
})

Cypress.Commands.add('loginViaUi', (email, password)=> {
cy.visit('/'),
cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med').click(),
cy.get(':nth-child(3) > .frm').type(email),
cy.get(':nth-child(4) > .frm').type(password),
cy.get('.btn-main').click()
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })