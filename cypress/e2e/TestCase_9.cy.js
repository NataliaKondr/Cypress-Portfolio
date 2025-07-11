describe("Search Product", () => {
    it("Проверка поиска продукта", () => { 
      cy.visit("https://automationexercise.com/");
      cy.contains("AutomationExercise");
      cy.contains("Products").click();
      cy.get(".product-overlay")
        .should("have.length.greaterThan", 0)
        .and("be.visible"); //все продукты на странице относятся к одному классу, и весь класс есть (>0-не пустые) и заполнен
      cy.get('#search_product').type('T-Shirt');
      cy.get('#submit_search').click();
      cy.get('h2.title.text-center').should('contain', 'Searched Products');
      cy.get('.features_items .productinfo', { timeout: 10000 }) // Увеличиваем таймаут до 10 секунд
      .should('have.length.at.least', 1) // Проверяем, что есть хотя бы 1 продукт
      .each(($product) => {
        cy.wrap($product).find('p').should('contain', 'T-Shirt');
    });
  });
});