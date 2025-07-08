describe("Logout User", () => {
    it("Выход пользователя", () => {
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.get(".fa.fa-lock").click();
      cy.contains("Login to your account");
      cy.get('[data-qa="login-email"]').type("kondrateva86121610@yandex.ru");
      cy.get('[data-qa="login-password"]').type("Lagavo44");
      cy.get('[data-qa="login-button"]').click();
      cy.contains("Logged in as Natalia");
      cy.get('.fa.fa-lock').click();
      cy.contains("Login to your account");
    });
});