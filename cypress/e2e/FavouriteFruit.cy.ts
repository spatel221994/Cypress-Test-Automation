

describe("Favourite fruit", () => {

  beforeEach(() => {
    cy.login();
    cy.get('[data-testid="nav-fruit"]').click();
  });



it("Moves fruit into favourite container", () => {

  cy.get('[data-testid="container-fruit"]').should("exist");

  cy.get('[data-testid="container-favourite"]').should("exist");

  cy.get('[data-testid="fruit-item"]').first().invoke("text").then((fruitName) => {

      cy.get('[data-testid="fruit-item"]').first().dblclick();

      // Favourite container updated
      cy.get('[data-testid="container-favourite"]').should("contain", fruitName);

      // Original container updated
      cy.get('[data-testid="container-fruit"]').should("not.contain", fruitName);

    });

});

});