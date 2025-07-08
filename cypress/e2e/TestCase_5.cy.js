describe("Register User with existing email", () => {
    it("Повторно регистрируем пользователя на одну почту", () => {
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.get(".fa.fa-lock").click();
      cy.contains("New User Signup!");
      cy.get('[data-qa="signup-name"]').type("Natalia");
      cy.get('[data-qa="signup-email"]').type("kondrateva8612163@yandex.ru");
      cy.get('[data-qa="signup-button"]').click();
      cy.contains("Email Address already exist!");
    });
});