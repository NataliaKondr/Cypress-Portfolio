  describe("Register User", () => {
    it("Регистрируем пользователя", () => {
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.get(".fa.fa-lock").click();
      cy.contains("New User Signup!"); 
      cy.get('[data-qa="signup-name"]').type('Natalia');
      cy.get('[data-qa="signup-email"]').type('kondrateva861216@yandex.ru');
      cy.get('[data-qa="signup-button"]').click();
      cy.contains("Enter Account Information");
      cy.get('#id_gender2').click();
      cy.get('[data-qa="password"]').type('Lagavo44');
      cy.get('[data-qa="days"]').click();
    });
  });