import '../support/commands'
describe("Logout User", () => {
    it("Logout User", () => {
      cy.openHomePage();
      cy.openLoginPage();
      cy.get('[data-qa="login-email"]').type("kondrateva86121610@yandex.ru");
      cy.get('[data-qa="login-password"]').type("Lagavo44");
      cy.get('[data-qa="login-button"]').click();
      cy.contains("Logged in as Natalia");
      cy.get('.fa.fa-lock').click();
      cy.contains("Login to your account");
    });
});