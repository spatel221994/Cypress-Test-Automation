
describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Shows validation message when try login without credentials", () => {

    cy.get('[data-testid="login-button"]')
      .click();

    cy.get('[data-testid="login-error"]')
      .should("contain","Please enter both username and password.");
  });

  it("Rejects invalid credentials", () => {
    
    cy.get('[data-testid="username-input"]').type("wronguser");

    cy.get('[data-testid="password-input"]').type("wrongpassword");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="login-error"]').should("be.visible");

  });

  it("Logs in successfully", () => {

    cy.get('[data-testid="username-input"]').clear().type("testuser");

    cy.get('[data-testid="password-input"]').clear().type("testpassword");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="logout-button"]').should("be.visible");
  });

});