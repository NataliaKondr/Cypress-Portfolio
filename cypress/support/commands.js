// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { locators as loc } from '../support/locators';
import {LoginPage, RegistrationPage} from '../pages/LoginPage'

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/')
  cy.contains('AutomationExercise')
});
Cypress.Commands.add('openTestCasesPage', () => {
  cy.contains(loc.HomePageLocators.testCasesLink, 'Test Cases').click();
  cy.contains("Test Cases")
});

Cypress.Commands.add('openLoginPage', () => {
  cy.get(loc.HomePageLocators.signupLoginLink).click()
  cy.contains('New User Signup!')
});

Cypress.Commands.add('registerUser', (user) => {
  cy.openHomePage();
  cy.openLoginPage();

  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();

  loginPage.enterName(user.fullName);
  loginPage.enterEmail(user.email);
  loginPage.clickSignup();

  registrationPage.fillBasicInfo(user.fullName, user.password, user.details.dateOfBirth);
  registrationPage.fillAddressInfo(user.firstName, user.lastName, user.details);
  registrationPage.submitRegistration();

  // Сохраняем данные пользователя в JSON-файл
  cy.writeFile('cypress/fixtures/registeredUser.json', user);
});

Cypress.Commands.add('openLoginPageAccount', () => {
  cy.get(loc.HomePageLocators.signupLoginLink).click()
  cy.contains('Login to your account')
});

Cypress.Commands.add('loginAccount', () => {
  cy.fixture('registeredUser').then(({ email, password, fullName }) => {
    cy.get(loc.LoginPageLocators.emailInput).type(email);
    cy.get(loc.LoginPageLocators.passwordInput).type(password);
    cy.get(loc.LoginPageLocators.loginButton).click();
    cy.contains(`Logged in as ${fullName}`).should('be.visible');
  });
});



