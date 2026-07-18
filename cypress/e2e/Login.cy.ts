
describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Rejects invalid credentials and then logs in successfully", () => {
    // Invalid login
    cy.get('[data-testid="username-input"]').type("wronguser");

    cy.get('[data-testid="password-input"]').type("wrongpassword");

    cy.get('[data-testid="login-button"]').click();

    // Error validation
    cy.get('[data-testid="login-error"]').should("be.visible");

    // Clear fields
    cy.get('[data-testid="username-input"]').clear().type("testuser");

    cy.get('[data-testid="password-input"]').clear().type("testpassword");

    cy.get('[data-testid="login-button"]').click();

    // Successful login validation
    cy.get('[data-testid="logout-button"]').should("be.visible");

  });

});