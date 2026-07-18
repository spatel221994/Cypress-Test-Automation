describe("Logo preference", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Shows logo on all pages and persists after reload", () => {
    cy.get('[data-testid="nav-settings"]').click();

    cy.get('[data-testid="logo-toggle"]').check();

    cy.get('[data-testid="brand-logo"]').should("be.visible");

    // Transactions page

    cy.get('[data-testid="nav-transactions"]').click();

    cy.get('[data-testid="brand-logo"]').should("be.visible");

    // Fruit page

    cy.get('[data-testid="nav-fruit"]').click();

    cy.get('[data-testid="brand-logo"]').should("be.visible");

    // Persistence check

    cy.reload();

    cy.get('[data-testid="brand-logo"]').should("be.visible");
  });
});
