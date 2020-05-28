/// <reference types="Cypress" />

import PeopleCenterPage from "./PeopleCenterPage"

class AddProfilePage extends PeopleCenterPage {
  getLoginField() {
    return cy.get('#login')
  }
  getFullNameField() {
    return cy.get('[name="fullName"]')
  }
  getRegistrationField() {
    return cy.get('.col-md-5.col-md-offset-1').find('.mr-form-control.ng-pristine.ng-untouched.ng-valid.ng-valid-maxlength')
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
  getAreaSearchField() {
    return cy.get('#selectAreaList')
  }
  getAreaSearchResultsField() {
    return cy.get('.ui-select-choices-row')
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
  selectArea(area){
    this.getAreaField().click()
    this.getAreaSearchField().type(area)
    this.getAreaSearchResultsField().first().click()
  }
}

export default AddProfilePage
