/// <reference types="Cypress" />

const baseRoute = baseRoute + ''

class Routes {
  getPostGetCurrentCulture() {
    return cy.route('POST', baseRoute + '/systemConfig/GetCurrentCulture')
  }
  getPostGetLoggedUser() {
    return cy.route('POST', baseRoute + '/employee/GetLoggedUser')
  }
  getPostCheckUserPermission() {
    return cy.route('POST', baseRoute + '/permission/CheckUserPermission')
  }
  getPostGetUserGroups() {
    return cy.route('POST', baseRoute + '/person/GetUserGroups')
  }
  getPostGetLanguages() {
    return cy.route('POST', baseRoute + '/person/GetLanguages')
  }
  getPostGetLanguage() {
    return cy.route('POST', baseRoute + '/languageLevel/GetLanguage')
  }
  getPostGetListCombobox() {
    return cy.route('POST', baseRoute + '/languageLevel/GetListCombobox')
  }
  getPostGetSkillCategoryList() {
    return cy.route('POST', baseRoute + '/skillCategory/GetSkillCategoryList')
  }
  getPostGetList() {
    return cy.route('POST', baseRoute + '/person/GetList')
  }
  getPostGetTree() {
    return cy.route('POST', baseRoute + '/areaTree/GetTree')
  }
  getPostGetLoggedUserId() {
    return cy.route('POST', baseRoute + '/areaTree/GetLoggedUserId')
  }
  getPostGetSkillKnowledgeList() {
    return cy.route('POST', baseRoute + '/skillKnowledge/GetSkillKnowledgeList')
  }
  getPostValidateLogin() {
    return cy.route('POST', baseRoute + '/person/ValidateLogin')
  }
  getPostGetPreSaveConditions() {
    return cy.route('POST', baseRoute + '/person/GetPreSaveConditions')
  }
  getPostSaveEmployeeSystemInfo() {
    return cy.route('POST', baseRoute + '/person/SaveEmployeeSystemInfo')
  }
  getPostGetLoggedManagementCycle() {
    return cy.route('POST', baseRoute + '/managementCycle/GetLoggedManagementCycle')
  }
  getPostGetLoggedUserModulesWithAccess() {
    return cy.route('POST', baseRoute + '/modules/GetLoggedUserModulesWithAccess')
  }
  getPostGetPerformanceInfo() {
    return cy.route('POST', baseRoute + '/initialDashboard/GetPerformanceInfo')
  }
  getPostGetLoggedUserActions() {
    return cy.route('POST', baseRoute + '/action/GetLoggedUserActions')
  }
  getPostGetEvaluationFormDashboardSummary() {
    return cy.route('POST', baseRoute + '/evaluator/GetEvaluationFormDashboardSummary*')
  }
  getPostGetWaitingApprovalCount() {
    return cy.route('POST', baseRoute + '/idpDashboard/GetWaitingApprovalCount*')
  }
  getPostGetMyActions() {
    return cy.route('POST', baseRoute + '/idpDashboard/GetMyActions')
  }
  getPosthasVigentResultReleased() {
    return cy.route('POST', baseRoute + '/evaluationForm/hasVigentResultReleased')
  }
  getPostGetLoggedUserProfileCompletionRate() {
    return cy.route('POST', baseRoute + '/initialDashboard/GetLoggedUserProfileCompletionRate')
  }
  getPostGetTeamSystemAccess() {
    return cy.route('POST', baseRoute + '/initialDashboard/GetTeamSystemAccess')
  }
}

export default Routes
