/// <reference types="Cypress" />

describe('first test', function()
{
    it('test1',function()
    {
        cy.visit("https://automation.mereo.com/");
        cy.get('#languageSelect').click()
        cy.get('[value="pt-BR"]').click()
        cy.wait(1000)
        cy.get('#txtUser').type('suporte.mereo')
        cy.get('#txtPsw').type('Ix57y81l*')
        cy.get('[value="Login"]').click()
        cy.get('#SettingsMenu').click()
        cy.get('#PeopleCentral').click()
        cy.wait(1000)
        cy.get('.pull-right.mr-0').find('.mr-btn.mr-btn-primary').click()
        cy.get('#login').type('teste')
        cy.get('[name="fullName"]').type('João Teste')
        cy.get('.mr-form-group').then(($el) => {
            var login  
            for (var i = 0;$el.find('.mr-form-feedback.ng-binding.ng-scope').length > 1;i++)
            {
                login = 'teste' + i
                cy.get('#login').clear()
                cy.get('[name="fullName"]').clear()
                cy.get('#login').type(login)
                cy.get('[name="fullName"]').type('João Teste')
                $el = cy.get('.mr-form-group')
            }
        })
        cy.get('#emailInputGroup').type('asdas@asdas.com')
        cy.get('.mr-tree-value').click()
        // cy.get('.mr-tree-results').contains('Default').click()
        cy.get('div.node.ng-scope').each(($el,index,$list) => {
            //$el.find('.branch-toggle.material-icons.md-24.ng-binding').click()
            var text = $el.text()
            if(text.includes('PRESIDÊNCIA'))
            {   
                $el.find('span.node-selector').click()
                //cy.log($el.text())
            }
        })
        cy.get('#userGroupFormGroup select').select('number:1')
        //cy.get('.mr-media-left').find('.mr-btn.mr-btn-clean').click()
    })
})