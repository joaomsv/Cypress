/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'
import Routes from '../apiObjects/Routes'
import PeopleCenterPage from '../pageObjects/PeopleCenterPage'
import ProfilePage from '../pageObjects/ProfilePage'

describe('People Central', function () {
  it('Create User', function () {
    const userLogin = 'suporte.mereo'
    const password = 'hp98*G16n'
    var login = 'teste'
    const name = 'João Teste'
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const peopleCenter = new PeopleCenterPage()
    const routes = new Routes()
    const profile = new ProfilePage()
    cy.visit('https://automation.mereo.com/')
    cy.server()
    cy.route('POST', '/').as('waitChangeCulture')
    loginPage.changeLanguage(1)
    cy.wait('@waitChangeCulture')
    loginPage.getLoginField().type(userLogin)
    loginPage.getPasswordField().type(password)
    loginPage.getLoginBtn().click()
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
    cy.wait(
      [
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
        '@GetSkillKnowledgeList',
      ],
      { requestTimeout: 10000 }
    )
    peopleCenter.getAddPersonBtn().click()
    routes.getPostValidateLogin().as('ValidateLogin')
    profile.getLoginField().type(login)
    profile.getFullNameField().type(name)
    cy.wait('@ValidateLogin').its('status').should('eq', 200)
    cy.get('@ValidateLogin')
      .its('response.body.result.data.0.isValid')
      .then((isValid) => {
        if (!isValid) cy.LoginGenerator(0, login, name)
      })
    profile.getEmailField().type('asdas@asdas.com')
    profile.getAreaField().click()
    profile.getAreaListField().each(($el, index, $list) => {
      var text = $el.text()
      if (text.includes('PRESIDÊNCIA')) {
        $el.find('span.node-selector').click()
      }
    })
    profile.getPermissionGroupsField().select('number:1')
    profile.getSaveBtn().click()
    profile.getToast().should('have.text', 'Registro inserido com sucesso.')
    profile.getLoginField().then(($e1) => {
      profile.getBackArrowBtn().click()
      cy.wait(
        [
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
          '@GetSkillKnowledgeList',
        ],
        { requestTimeout: 10000 }
      )
      peopleCenter.getSearchField().type($e1.val())
      peopleCenter.getSearchBtn().click()
      peopleCenter.getProfileCards().each(($e2, index, $list) => {
        if (
          $e2.find('.mr-card-face.mr-card-face--back .mr-card-body.text-center .mr-card-person-title').text() ==
          $e1.val()
        )
          expect(
            $e2.find('.mr-card-face.mr-card-face--front .mr-card-body.text-center .mr-card-person-title').text()
          ).to.eq(name)
      })
    })
  })
})
