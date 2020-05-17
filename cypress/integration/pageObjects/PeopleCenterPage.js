/// <reference types="Cypress" />

class PeopleCenterPage {
  getAddPersonBtn(){
    return cy.get('.pull-right.mr-0').find('.mr-btn.mr-btn-primary')
  }
}

export default PeopleCenterPage
