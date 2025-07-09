describe("Verify Test Cases Page", () => {
    it("Переход на страницу тест кейсов", () => {
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.contains('Test Cases').click();
      cy.contains('Test Cases');
    });
});