Cypress.Commands.add('getFirstNameField', () => {
    return cy.get('input[name="firstName"]')
  })
  
  Cypress.Commands.add('getLastNameField', () => {
    return cy.get('input[name="lastName"]')
  })
  
  Cypress.Commands.add('getEmailField', () => {
    return cy.get('input[name="email"]')
  })
  
  Cypress.Commands.add('getMessageField', () => {
    return cy.get('textarea[name="message"]')
  })
  
  Cypress.Commands.add('getPhoneNumberField', () => {
    return cy.get('input[name="phoneNumber"]')
  })
  
  Cypress.Commands.add('submitButton', () => {
    return cy.get('//*[@id="__nuxt"]/div/div[2]/div/div[1]/div/form/button')
  })