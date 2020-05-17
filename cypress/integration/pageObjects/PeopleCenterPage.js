/// <reference types="Cypress" />

class PeopleCenterPage {
  getAddPersonBtn() {
    return cy.get('.pull-right.mr-0').find('.mr-btn.mr-btn-primary')
  }
  getSearchField() {
    return cy.get('.mr-input-group').find('.mr-form-control')
  }
  getSearchBtn() {
    return cy.get('.mr-input-group').find('.mr-btn')
  }
  getProfileCards() {
    return cy.get('.mr-card-person.ng-scope')
  }
}

export default PeopleCenterPage
