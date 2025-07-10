describe("Verify Test Cases Page", () => {
  it("Переход на страницу тест кейсов", () => {
    cy.visit("https://automationexercise.com/");
    cy.contains("AutomationExercise");
    cy.contains("Products").click();
    cy.get(".product-overlay")
      .should("have.length.greaterThan", 0)
      .and("be.visible"); //все продукты на странице относятся к одному классу, и весь класс есть (>0-не пустые) и заполнен
    cy.get('a[href="/product_details/1"]').click();
    cy.url().should("include", "/product_details/1");
    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information p')
      .contains('Category')
      .should('be.visible');
    cy.get('.product-information span')
      .contains('Rs.')
      .should('be.visible');
    cy.get('.product-information p')
        .contains('Availability')
        .should('be.visible');
    cy.get('.product-information p').contains('Condition').should('be.visible');
    cy.get('.product-information p').contains('Brand').should('be.visible');
  });
});
