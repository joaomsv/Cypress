/// <reference types="Cypress" />

class LoginPage {
  getLoginField() {
    return cy.get('#txtUser')
  }

  getPasswordField() {
    return cy.get('#txtPsw')
  }
  getLanguageBtn() {
    return cy.get('#languageSelect')
  }
  changeLanguage(language) {
    this.getLanguageBtn().click()
    switch (language) {
      case 1:
        cy.get('[value="pt-BR"]').click()
        break
      case 2:
        cy.get('[value="en-US"]').click()
        break
      case 3:
        cy.get('[value="es-ES"]').click()
        break
      case 4:
        cy.get('[value="fr-FR"]').click()
        break
      case 5:
        cy.get('[value="de-DE"]').click()
        break
      case 6:
        cy.get('[value="zh-CN"]').click()
        break
      case 7:
        cy.get('[value="th-TH"]').click()
        break
      case 8:
        cy.get('[value="tr-TR"]').click()
        break
      case 9:
        cy.get('[value="ar-SA"]').click()
        break
    }
  }
  getLoginBtn() {
    return cy.get('[value="Login"]')
  }
  Login(username,password,language) {
    cy.route('POST', '/').as('waitChangeCulture')
    cy.route('POST', '/Login.aspx').as('waitForLogin')
    this.changeLanguage(language)
    cy.wait('@waitChangeCulture')
    this.getLoginField().type(username)
    this.getPasswordField().type(password)
    this.getLoginBtn().click()
    cy.wait('@waitForLogin')
  }
}

export default LoginPage
