describe("Favourite fruit", () => {
  beforeEach(() => {
    cy.login();

    cy.get('[data-testid="nav-fruit"]').click();
  });

  it("Moves fruit into favourite container using double click", () => {
    cy.get('[data-testid="container-fruit"]').should("exist");

    cy.get('[data-testid="container-favourite"]').should("exist");

    cy.get('[data-testid="fruit-item"]').first().invoke("text").then((fruitName) => {
        
        cy.get('[data-testid="fruit-item"]').first().dblclick();

        cy.get('[data-testid="container-favourite"]').should("contain", fruitName,);

        cy.get('[data-testid="container-fruit"]').should("not.contain",fruitName,);
      });
  });

  it("Moves another fruit into favourite container using drag and drop", () => {
    cy.get('[data-testid="fruit-item"]').eq(1).invoke("text").then((fruitName) => {
        
        const dataTransfer = new DataTransfer();

        cy.get('[data-testid="fruit-item"]').eq(1).trigger("dragstart", {dataTransfer,});

        cy.get('[data-testid="container-favourite"]').trigger("dragover", {dataTransfer,});

        cy.get('[data-testid="container-favourite"]').trigger("drop", {dataTransfer,});

        cy.get('[data-testid="container-favourite"]').should("contain",fruitName,);

        cy.get('[data-testid="container-fruit"]').should("not.contain",fruitName,);
        
      });
  });
});
