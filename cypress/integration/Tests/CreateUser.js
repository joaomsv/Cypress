/// <reference types="Cypress" />

function LoginGenerator(counter, loginText, name) {
  let login = loginText + counter
  cy.get('#login').clear()
  cy.get('[name="fullName"]').clear()
  cy.get('#login').type(login)
  cy.get('[name="fullName"]').type(name)
  cy.wait('@ValidateLogin').its('status').should('eq', 200)
  cy.get('@invalidUserCheck').then($e2 => {
    if ($e2.text().includes('Login já existe.'))
      LoginGenerator(counter + 1, loginText, name)
  })
}

describe('first test', function () {
  it('test1', function () {
    const userLogin = 'suporte.mereo'
    const password = 'Ix57y81l*'
    var login = 'teste'
    const name = 'João Teste'
    cy.visit('https://automation.mereo.com/')
    cy.server()
    cy.get('#languageSelect').click()
    cy.route('POST', '/').as('waitChangeCulture')
    cy.get('[value="pt-BR"]').click()
    cy.wait('@waitChangeCulture')
    cy.get('#txtUser').type(userLogin)
    cy.get('#txtPsw').type(password)
    cy.get('[value="Login"]').click()
    cy.get('#SettingsMenu').click()
    cy.route('POST', 'api/services/app/systemConfig/GetCurrentCulture').as(
      'GetCurrentCulture'
    )
    cy.route('POST', 'api/services/app/employee/GetLoggedUser').as(
      'GetLoggedUser'
    )
    cy.route('POST', 'api/services/app/permission/CheckUserPermission').as(
      'CheckUserPermission'
    )
    cy.route('POST', 'api/services/app/person/GetUserGroups').as(
      'GetUserGroups'
    )
    cy.route('POST', 'api/services/app/person/GetLanguages').as('GetLanguages')
    cy.route('POST', 'api/services/app/languageLevel/GetLanguage').as(
      'GetLanguage'
    )
    cy.route('POST', 'api/services/app/languageLevel/GetListCombobox').as(
      'GetListCombobox'
    )
    cy.route('POST', 'api/services/app/skillCategory/GetSkillCategoryList').as(
      'GetSkillCategoryList'
    )
    cy.route('POST', 'api/services/app/person/GetList').as('GetList')
    cy.route('POST', 'api/services/app/areaTree/GetTree').as('GetTree')
    cy.route('POST', 'api/services/app/areaTree/GetLoggedUserId').as(
      'GetLoggedUserId'
    )
    cy.route(
      'POST',
      'api/services/app/skillKnowledge/GetSkillKnowledgeList'
    ).as('GetSkillKnowledgeList')
    cy.get('#PeopleCentral').click()
    cy.wait([
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
    ])
    cy.get('.pull-right.mr-0').find('.mr-btn.mr-btn-primary').click()
    cy.route('POST', 'api/services/app/person/ValidateLogin').as(
      'ValidateLogin'
    )
    cy.get('#login').type(login)
    cy.get('[name="fullName"]').type(name)
    cy.wait('@ValidateLogin').its('status').should('eq', 200)
    cy.get('.mr-form-group').first().as('invalidUserCheck')
    cy.get('@invalidUserCheck').then($e1 => {
      if ($e1.text().includes('Login já existe.'))
        LoginGenerator(0, login, name)
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
    // cy.get('.toast-message').then($msg => {
    //   var text = $msg.text()
    //   expect(text).to.equal('Registro inserido com sucesso.')
    // })
  })
})
