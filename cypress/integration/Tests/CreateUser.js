/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/Pages/LoginPage/LoginPage'
import Routes from '../../pageObjects/APIs/Routes'
import PeopleCenterPage from '../../pageObjects/Pages/PeopleCenter/PeopleCenterPage'
import ProfilePage from '../../pageObjects/Pages/PeopleCenter/ProfilePage'

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
    //Created listeners for all XHRs
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
    peopleCenter.getPeopleCentral().click()
    //Wait for all People Center APIs to finish
    cy.wait(xhrPeopleCenter, { requestTimeout: 10000 })
    profile.addUser(
      this.userdata.login,
      this.userdata.fullName,
      'matricula',
      'fake@mereo.com',
      this.userdata.area,
      'number:1'
    )
    profile.getLoginField().then(($e1) => {
      profile.getBackArrowBtn().click()
      xhrPeopleCenter.shift()
      cy.wait(xhrPeopleCenter, { requestTimeout: 10000, responseTimeout: 60000 })
      peopleCenter.getSearchField().type($e1.val())
      peopleCenter.getSearchBtn().click()
      peopleCenter.getProfileCards().each(($e2, index, $list) => {
        if (
          $e2.find('.mr-card-face.mr-card-face--back .mr-card-body.text-center .mr-card-person-title').text() ==
          $e1.val()
        )
          expect(
            $e2.find('.mr-card-face.mr-card-face--front .mr-card-body.text-center .mr-card-person-title').text()
          ).to.eq(this.userdata.fullName)
      })
    })
  })
})
