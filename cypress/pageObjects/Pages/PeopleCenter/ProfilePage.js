/// <reference types="Cypress" />

import PeopleCenterPage from './PeopleCenterPage'
import Routes from '../../APIs/Routes'

class ProfilePage extends PeopleCenterPage {
  getLoginField() {
    return cy.get('#login')
  }
  getFullNameField() {
    return cy.get('[name="fullName"]')
  }
  getRegistrationField() {
    return cy
      .get('.col-md-5.col-md-offset-1')
      .find('.mr-form-control.ng-pristine.ng-untouched.ng-valid.ng-valid-maxlength')
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
    return cy.get('.ui-select-match')
  }
  getAreaSearchResultsField() {
    return cy.get('.ui-select-choices-row')
  }
  getPermissionGroupsField() {
    return cy.get('#userGroupFormGroup select')
  }
  getAreaResponsibilityAddBtn() {
    return cy.get('.col-md-12.mb-3.pr-0').find('.mr-btn.mr-btn-primary')
  }
  getAreaResponsibilityModalSearchField() {
    return cy.get('.mr-input-group.ui-select-container.ui-select-bootstrap.dropdown.ng-valid.ng-valid-required')
  }
  getAreaResponsibilityModalSearchResults() {
    return cy.get('.ui-select-choices-row-inner')
  }
  getAddAreaResponsibilityModalAddBtn() {
    return cy.get('.modal-footer').find('.mr-btn.mr-btn-primary.ng-binding')
  }
  getAreaResponsibilityListDesc() {
    return cy.get('tr.ng-scope').find('td.ng-binding')
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
  selectArea(area) {
    this.getAreaField().click()
    this.getAreaSearchField().type(area)
    this.getAreaSearchResultsField().first().click()
  }
  addAreaResponsability(area) {
    this.getAreaResponsibilityAddBtn().click()
    this.getAreaResponsibilityModalSearchField().click()
    this.getAreaResponsibilityModalSearchField().type(area)
    this.getAreaResponsibilityModalSearchResults().first().click()
    this.getAddAreaResponsibilityModalAddBtn().click()
    this.getAreaResponsibilityListDesc().each(($el, index, $list) => {
      expect($el.text()).to.include(area)
    })
  }
  addUser(login, fullName, registration, email, area, perGroup) {
    let routes = new Routes();
    this.getAddPersonBtn().click()
    routes.getPostValidateLogin().as('ValidateLogin')
    routes.getPostGetPreSaveConditions().as('GetPreSaveConditions')
    routes.getPostSaveEmployeeSystemInfo().as('SaveEmployeeSystemInfo')
    this.getLoginField().type(login)
    this.getFullNameField().type(fullName)
    cy.wait('@ValidateLogin').its('status').should('eq', 200)
    cy.get('@ValidateLogin')
      .its('response.body.result.data.0.isValid')
      .then((isValid) => {
        if (!isValid) cy.LoginGenerator(0, login, fullName)
      })
    this.getRegistrationField().type(registration)
    this.getEmailField().type(email)
    this.selectArea(area)
    this.getPermissionGroupsField().select(perGroup)
    this.addAreaResponsability(area)
    this.getSaveBtn().click()
    cy.wait(['@GetPreSaveConditions', '@SaveEmployeeSystemInfo'])
    this.getToast().should('have.text', 'Registro inserido com sucesso.')
  }
}

export default ProfilePage
