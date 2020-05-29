/// <reference types="Cypress" />

class BasePage {
  getSettingsMenu() {
    return cy.get('#SettingsMenu')
  }
  getPeopleCentral() {
    this.getSettingsMenu().click()
    return cy.get('#PeopleCenter')
  }
}

export default BasePage
