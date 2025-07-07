describe("Login User with correct email and password", () => {
    it("Авторизуем пользователя с валидными данными", () => {
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
    });
});