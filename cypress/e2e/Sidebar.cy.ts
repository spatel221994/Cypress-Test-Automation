describe("Sidebar visibility", () => {
  it("Sidebar and logout should not be present before login", () => {
    cy.visit("/login");

    cy.get('[data-testid="nav-transactions"]').should("not.exist");

    cy.get('[data-testid="nav-fruit"]').should("not.exist");

    cy.get('[data-testid="nav-settings"]').should("not.exist");

    cy.get('[data-testid="logout-button"]').should("not.exist");
  });

  it("Sidebar and logout should be present after login", () => {
    cy.login();

    cy.get('[data-testid="nav-transactions"]').should("be.visible");

    cy.get('[data-testid="nav-fruit"]').should("be.visible");

    cy.get('[data-testid="nav-settings"]').should("be.visible");

    cy.get('[data-testid="logout-button"]').should("be.visible");
  });
});
