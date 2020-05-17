/// <reference types="Cypress" />

class AddProfilePage {
  getLoginField() {
    return cy.get('#login')
  }
  getFullNameField() {
    return cy.get('[name="fullName"]')
  }
  getEmailField() {
    return cy.get('#emailInputGroup')
  }
  getAreaField() {
    return cy.get('.mr-tree-value')
  }
  getAreaListField() {
    return cy.get('div.node.ng-scope')
  }
  getPermissionGroupsField() {
    return cy.get('#userGroupFormGroup select')
  }
  getSaveBtn() {
    return cy.get('.mr-btn.mr-btn-primary.pull-right.ng-binding')
  }
  getToast() {
    return cy.get('.toast-message')
  }
  getBackArrowBtn() {
    return cy.get('[ui-sref="personList"]')
  }
}

export default AddProfilePage
