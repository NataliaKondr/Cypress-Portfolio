describe("Register User", () => {
  it("Регистрируем пользователя", () => {
    cy.visit("https://automationexercise.com/");
    cy.contains("AutomationExercise");
    cy.get(".fa.fa-lock").click();
    cy.contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type("Natalia");
    cy.get('[data-qa="signup-email"]').type("kondrateva8612167@yandex.ru");
    cy.get('[data-qa="signup-button"]').click();
    cy.contains("Enter Account Information");
    cy.get("#id_gender2").click();
    cy.get('[data-qa="password"]').type("Lagavo44");
    cy.get('[data-qa="days"]').select(10);
    cy.get('[data-qa="months"]').select(5);
    cy.get('[data-qa="years"]').select(10);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get('[data-qa="first_name"]').type("Nika");
    cy.get('[data-qa="last_name"]').type("Simps");
    cy.get('[data-qa="company"]').type("Sterling Innovations Ltd");
    cy.get("#address1").type("42 Regent Street, Mayfair, Box 728");
    cy.get("#address2").type(
      "742 Evergreen Terrace, Springfield, 90210, United States (P.O. Box 348, Globex Corporation)"
    );
    cy.get('[data-qa="country"]').select("Canada");
    cy.get('[data-qa="state"]').type("British Columbia");
    cy.get('[data-qa="city"]').type("Toronto");
    cy.get('[data-qa="zipcode"]').type("V8N 3H8");
    cy.get('[data-qa="mobile_number"]').type("+16139572991");
    cy.get('[data-qa="create-account"]').click();
    cy.contains("Account Create");
    cy.get('[data-qa="continue-button"]').click();
    cy.contains("Logged in as Natalia");
    cy.get('.fa.fa-trash-o').click();
    cy.contains("Account Deleted");
    cy.get('[data-qa = "continue-button"]').click();
  });
});
