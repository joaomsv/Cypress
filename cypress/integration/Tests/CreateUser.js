/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'
import Routes from '../apiObjects/Routes'

describe('first test', function () {
  it('test1', function () {
    const userLogin = 'suporte.mereo'
    const password = 'hp98*G16n'
    var login = 'teste'
    const name = 'João Teste'
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const routes = new Routes()
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
    cy.get('.pull-right.mr-0').find('.mr-btn.mr-btn-primary').click()
    routes.getPostValidateLogin().as('ValidateLogin')
    cy.get('#login').type(login)
    cy.get('[name="fullName"]').type(name)
    cy.wait('@ValidateLogin').its('status').should('eq', 200)
    cy.get('@ValidateLogin')
      .its('response.body.result.data.0.isValid')
      .then(isValid => {
        if (!isValid) cy.LoginGenerator(0, login, name)
      })
    cy.get('#emailInputGroup').type('asdas@asdas.com')
    cy.get('.mr-tree-value').click()
    cy.get('div.node.ng-scope').each(($el, index, $list) => {
      var text = $el.text()
      if (text.includes('PRESIDÊNCIA')) {
        $el.find('span.node-selector').click()
      }
    })
    cy.get('#userGroupFormGroup select').select('number:1')
    cy.get('.mr-btn.mr-btn-primary.pull-right.ng-binding').click()
    cy.get('.toast-message').should(
      'have.text',
      'Registro inserido com sucesso.'
    )
    cy.get('#login').then($e1 => {
      cy.get('[ui-sref="personList"]').click()
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
      cy.get('.mr-input-group').find('.mr-form-control').type($e1.val())
      cy.get('.mr-input-group').find('.mr-btn').click()
      cy.get('.mr-card-person.ng-scope').each(($e2, index, $list) => {
        if (
          $e2
            .find(
              '.mr-card-face.mr-card-face--back .mr-card-body.text-center .mr-card-person-title'
            )
            .text() == $e1.val()
        )
          expect(
            $e2
              .find(
                '.mr-card-face.mr-card-face--front .mr-card-body.text-center .mr-card-person-title'
              )
              .text()
          ).to.eq(name)
      })
    })
  })
})
