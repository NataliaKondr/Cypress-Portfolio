describe("Verify Subscription in home page", () => {
    it("Проверка подписки на главной странице", () => { 
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.get('footer').scrollIntoView().should('be.visible');//скролим к футеру
      cy.contains('SUBSCRIPTION', { matchCase: false, timeout: 10000 })
      .should('be.visible');
    const testEmail = `test${Math.random().toString(36).substring(2)}@example.com`;//Math.random() создаёт случайный email для каждого теста
      cy.get('#susbscribe_email').type(testEmail);
      cy.get('#subscribe').click();
      cy.contains('You have been successfully subscribed!', { timeout: 10000 })//Проверяем сообщение об успехе
      .should('be.visible');
  });
});