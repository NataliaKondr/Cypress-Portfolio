describe("Login User with incorrect email and password", () => {
    it("Попытка авторизации незарегистрированного пользователя", () => {
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.get(".fa.fa-lock").click();
      cy.contains("Login to your account");
      cy.get('[data-qa="login-email"]').type("kondratev@yandex.ru");
      cy.get('[data-qa="login-password"]').type("Lagavo44");
      cy.get('[data-qa="login-button"]').click();
      cy.contains("Your email or password is incorrect!");
    });
});