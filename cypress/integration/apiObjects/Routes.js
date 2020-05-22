/// <reference types="Cypress" />

class Routes {
  getPostGetCurrentCulture() {
    return cy.route('POST', 'api/services/app/systemConfig/GetCurrentCulture')
  }
  getPostGetLoggedUser() {
    return cy.route('POST', 'api/services/app/employee/GetLoggedUser')
  }
  getPostCheckUserPermission() {
    return cy.route('POST', 'api/services/app/permission/CheckUserPermission')
  }
  getPostGetUserGroups() {
    return cy.route('POST', 'api/services/app/person/GetUserGroups')
  }
  getPostGetLanguages() {
    return cy.route('POST', 'api/services/app/person/GetLanguages')
  }
  getPostGetLanguage() {
    return cy.route('POST', 'api/services/app/languageLevel/GetLanguage')
  }
  getPostGetListCombobox() {
    return cy.route('POST', 'api/services/app/languageLevel/GetListCombobox')
  }
  getPostGetSkillCategoryList() {
    return cy.route('POST', 'api/services/app/skillCategory/GetSkillCategoryList')
  }
  getPostGetList() {
    return cy.route('POST', 'api/services/app/person/GetList')
  }
  getPostGetTree() {
    return cy.route('POST', 'api/services/app/areaTree/GetTree')
  }
  getPostGetLoggedUserId() {
    return cy.route('POST', 'api/services/app/areaTree/GetLoggedUserId')
  }
  getPostGetSkillKnowledgeList() {
    return cy.route('POST', 'api/services/app/skillKnowledge/GetSkillKnowledgeList')
  }
  getPostValidateLogin() {
    return cy.route('POST', 'api/services/app/person/ValidateLogin')
  }
  getPostGetPreSaveConditions(){
    return cy.route('POST','api/services/app/person/GetPreSaveConditions')
  }
  getPostSaveEmployeeSystemInfo(){
    return cy.route('POST','api/services/app/person/SaveEmployeeSystemInfo')
  }
}

export default Routes
