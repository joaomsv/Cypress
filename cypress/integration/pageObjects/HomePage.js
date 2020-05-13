/// <reference types="Cypress" />

class HomePage {
  getSettingsMenu() {
    return cy.get('#SettingsMenu')
  }
  getPeopleCentral() {
    this.getSettingsMenu().click()
    return cy.get('#PeopleCentral')
  }
}

export default HomePage
