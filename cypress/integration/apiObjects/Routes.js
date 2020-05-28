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
  getPostGetLoggedManagementCycle(){
    return cy.route('POST','api/services/app/managementCycle/GetLoggedManagementCycle')
  }
  getPostGetLoggedUserModulesWithAccess(){
    return cy.route('POST','api/services/app/modules/GetLoggedUserModulesWithAccess')
  }
  getPostGetPerformanceInfo(){
    return cy.route('POST','api/services/app/initialDashboard/GetPerformanceInfo')
  }
  getPostGetLoggedUserActions(){
    return cy.route('POST','api/services/app/action/GetLoggedUserActions')
  }
  getPostGetEvaluationFormDashboardSummary(){
    return cy.route('POST','api/services/app/evaluator/GetEvaluationFormDashboardSummary*')
  }
  getPostGetWaitingApprovalCount(){
    return cy.route('POST','api/services/app/idpDashboard/GetWaitingApprovalCount*')
  }
  getPostGetMyActions(){
    return cy.route('POST','api/services/app/idpDashboard/GetMyActions')
  }
  getPosthasVigentResultReleased(){
    return cy.route('POST','api/services/app/evaluationForm/hasVigentResultReleased')
  }
  getPostGetLoggedUserProfileCompletionRate(){
    return cy.route('POST','api/services/app/initialDashboard/GetLoggedUserProfileCompletionRate')
  }
  getPostGetTeamSystemAccess(){
    return cy.route('POST','api/services/app/initialDashboard/GetTeamSystemAccess')
  }
}

export default Routes
