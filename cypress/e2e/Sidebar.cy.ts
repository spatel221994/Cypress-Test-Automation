describe("Sidebar visibility", () => {
  it("Should not show protected navigation before login", () => {
    cy.visit("/login");

    cy.get('[data-testid="nav-transactions"]').should("not.exist");

    cy.get('[data-testid="nav-fruit"]').should("not.exist");

    cy.get('[data-testid="nav-settings"]').should("not.exist");

    cy.get('[data-testid="logout-button"]').should("not.exist");
  });

  it("Should show sidebar after login", () => {
    cy.login();

    cy.get('[data-testid="nav-transactions"]').should("be.visible");

    cy.get('[data-testid="nav-fruit"]').should("be.visible");

    cy.get('[data-testid="nav-settings"]').should("be.visible");

    cy.get('[data-testid="logout-button"]').should("be.visible");
  });
});
