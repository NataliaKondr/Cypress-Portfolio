import "cypress-file-upload"; //убрать в настройки
describe("Contact Us Form", () => {
  it("Форма связаться с нами", () => {
    cy.visit("https://automationexercise.com/");
    cy.contains("AutomationExercise");
    cy.get(".fa.fa-envelope").click();
    cy.contains("Get In Touch");
    cy.get('[data-qa="name"]').type("Natalia");
    cy.get('[data-qa="email"]').type("kondrateva8612163@yandex.ru");
    cy.get('[data-qa="subject"]').type("N123");
    cy.get('[data-qa="message"]').type("N123ghnkkkl");
    cy.get('input[type="file"]').attachFile("test.txt");
    cy.get('[data-qa="submit-button"]').click();
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Press OK to proceed!");
      return true;
    });
    cy.contains("Success! Your details have been submitted successfully.");
    cy.get(".fa.fa-angle-double-left").click();
    cy.contains("AutomationExercise");
  });
});
