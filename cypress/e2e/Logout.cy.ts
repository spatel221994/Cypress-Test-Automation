
describe("Logout functionality", () => {

  it("Logs out successfully", () => {

    cy.login();

    cy.get('[data-testid="logout-button"]').click();

    // Login page visible
    cy.get('[data-testid="login-form"]').should("be.visible");

    // Protected navigation removed
    cy.get('[data-testid="nav-transactions"]').should("not.exist");

    cy.get('[data-testid="nav-fruit"]').should("not.exist");

    cy.get('[data-testid="nav-settings"]').should("not.exist");

  });

});