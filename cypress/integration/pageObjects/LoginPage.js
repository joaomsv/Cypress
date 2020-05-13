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
    this.getLanguageBtn.click()
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
}

export default LoginPage
