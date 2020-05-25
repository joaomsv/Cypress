/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'
import Routes from '../apiObjects/Routes'
import PeopleCenterPage from '../pageObjects/PeopleCenterPage'
import ProfilePage from '../pageObjects/ProfilePage'

describe('People Central', function () {
  const loginPage = new LoginPage()
  before(function () {
    cy.fixture('user').then(function (userdata) {
      this.userdata = userdata
      cy.server()
      cy.visit('https://automation.mereo.com/', { timeout: 120000 })
      loginPage.Login(this.userdata.username, this.userdata.password, 1)
    })
  })

  it('Create User', function () {
    const homePage = new HomePage()
    const peopleCenter = new PeopleCenterPage()
    const routes = new Routes()
    const profile = new ProfilePage()
    var xhrPeopleCenter = [
      '@GetCurrentCulture',
      '@GetLoggedUser',
      '@CheckUserPermission',
      '@GetUserGroups',
      '@GetLanguages',
      '@GetLanguage',
      '@GetListCombobox',
      '@GetSkillCategoryList',
      '@GetList',
      '@GetTree',
      '@GetLoggedUserId',
      '@GetSkillKnowledgeList'
    ]
    //Created listeners for all XHRs on the People Central page
    routes.getPostGetCurrentCulture().as('GetCurrentCulture')
    routes.getPostGetLoggedUser().as('GetLoggedUser')
    routes.getPostCheckUserPermission().as('CheckUserPermission')
    routes.getPostGetUserGroups().as('GetUserGroups')
    routes.getPostGetLanguages().as('GetLanguages')
    routes.getPostGetLanguage().as('GetLanguage')
    routes.getPostGetListCombobox().as('GetListCombobox')
    routes.getPostGetSkillCategoryList().as('GetSkillCategoryList')
    routes.getPostGetList().as('GetList')
    routes.getPostGetTree().as('GetTree')
    routes.getPostGetLoggedUserId().as('GetLoggedUserId')
    routes.getPostGetSkillKnowledgeList().as('GetSkillKnowledgeList')
    //Access People Central
    homePage.getPeopleCentral().click()
    //Wait for all APIs to finish
    cy.wait(xhrPeopleCenter, { requestTimeout: 10000 })
    peopleCenter.getAddPersonBtn().click()
    routes.getPostValidateLogin().as('ValidateLogin')
    routes.getPostGetPreSaveConditions().as('GetPreSaveConditions')
    routes.getPostSaveEmployeeSystemInfo().as('SaveEmployeeSystemInfo')
    profile.getLoginField().type(this.userdata.login)
    profile.getFullNameField().type(this.userdata.fullName)
    cy.wait('@ValidateLogin').its('status').should('eq', 200)
    cy.get('@ValidateLogin')
      .its('response.body.result.data.0.isValid')
      .then((isValid) => {
        if (!isValid) cy.LoginGenerator(0, this.userdata.login, this.userdata.fullName)
      })
    profile.getEmailField().type('asdas@asdas.com')
    profile.selectArea('PRESIDÊNCIA')
    profile.getPermissionGroupsField().select('number:1')
    profile.getSaveBtn().click()
    cy.wait(['@GetPreSaveConditions', '@SaveEmployeeSystemInfo'])
    profile.getToast().should('have.text', 'Registro inserido com sucesso.')
    profile.getLoginField().then(($e1) => {
      profile.getBackArrowBtn().click()
      xhrPeopleCenter.shift()
      cy.wait(xhrPeopleCenter, { requestTimeout: 10000 })
      peopleCenter.getSearchField().type($e1.val())
      peopleCenter.getSearchBtn().click()
      peopleCenter.getProfileCards().each(($e2, index, $list) => {
        if (
          $e2.find('.mr-card-face.mr-card-face--back .mr-card-body.text-center .mr-card-person-title').text() ==
          $e1.val()
        )
          expect(
            $e2.find('.mr-card-face.mr-card-face--front .mr-card-body.text-center .mr-card-person-title').text()
          ).to.eq(fullName)
      })
    })
  })
})
