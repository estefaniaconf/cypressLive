
beforeEach(() => {
  cy.visit('https://myreactproject.com')
  cy.visit('cypress/support/commands.js')
})

describe('Form fields', () => {
  it('Checking if it has the following fields', () => {
    cy.getFirstNameField().should('exist')
    cy.getLastNameField().should('exist')
    cy.getEmailField().should('exist')
    cy.getPhoneNumberField().should('exist')
    cy.getMessageField().should('exist')
  })
})

describe('Submit button works', () => {
  it('Submit button works once all fields are completed', () => {
    cy.getFirstNameField().type('Florencia')
    cy.getLastNameField().type('Mendez')
    cy.getEmailField().type('fmendez@gmail.com')
    cy.getPhoneNumberField().type('82345678')
    cy.getMessageField().type('hello its me')
    cy.submitButton().should('be.enabled')
  })
})

describe('Error submitting information', () => {
  it('If the fields are not completed or the data is invalid submit button should not be enable', () => {
    cy.getFirstNameField().type('123')
    cy.getLastNameField().type('456')
    cy.getEmailField().type('xyz')
    cy.submitButton().should('be.disabled')
    cy.contains('Please enter valid information')
  })
})

describe('Empty Form Submission', () => {
  it('If the fields are empty an error message should be displayed', () => {
    cy.getFirstNameField().clear()
    cy.getLastNameField().clear()
    cy.getEmailField().clear()
    cy.submitButton().should('be.disabled')
    cy.contains('Please fill required fields')
  })
})

describe('Form Succesfully Submitted', () => {
  it('Once the form is submitted a success message is displayed', () => {
    cy.getFirstNameField().type('Jose Luis')
    cy.getLastNameField().type('Slobotsky')
    cy.getEmailField().type('slobo@gmail.com')
    cy.getPhoneNumberField().type('82345678')
    cy.getMessageField().type('typing a message')
    cy.submitButton().click()
    cy.contains('Form was submitted succesfully! Thank you')
  })
})

describe('Confirmation Page Data', () => {
  it('The submitted data is displayed correctly in the confirmation page', () => {
    const firstName = 'Elena'
    const lastName = 'Villanueva'
    const email = 'eevillanueva@icloud.com'
    const phoneNumber = '8180976243'
    const message = 'Asking for information'

    cy.getFirstNameField().type(firstName)
    cy.getLastNameField().type(lastName)
    cy.getEmailField().type(email)
    cy.getPhoneNumberField().type(phoneNumber)
    cy.getMessageField().type(message)
    cy.submitButton().click()

    cy.url().should('include', '/confirmation-page')
    cy.contains(firstName)
    cy.contains(lastName)
    cy.contains(email)
    cy.contains(phoneNumber)
    cy.contains(message)
  })
})