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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginGenerator', (counter, loginText, name) => {
  let login = loginText + counter
  cy.get('#login').clear()
  cy.get('[name="fullName"]').clear()
  cy.get('#login').type(login)
  cy.get('[name="fullName"]').type(name)
  cy.wait('@ValidateLogin', { requestTimeout: 10000 })
    .its('status')
    .should('eq', 200)
  cy.get('@ValidateLogin')
    .its('response.body.result.data.0.isValid')
    .then(isValid => {
      if (!isValid) cy.LoginGenerator(counter + 1, loginText, name)
    })
})
