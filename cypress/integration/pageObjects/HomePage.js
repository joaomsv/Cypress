/// <reference types="Cypress" />

class HomePage {
  getSettingsMenu() {
    return cy.get('#SettingsMenu')
  }
  getPeopleCentral() {
    this.getSettingsMenu().click()
    return cy.get('#PeopleCenter')
  }
}

export default HomePage
