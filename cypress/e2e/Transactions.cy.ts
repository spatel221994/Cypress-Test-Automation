describe("Transactions page", () => {
  beforeEach(() => {
    cy.login();

    cy.get('[data-testid="nav-transactions"]').click();
  });

  it("Should paginate transactions correctly", () => {
    // Page 1 validation

    cy.get('[data-testid="current-page"]').should("contain", "1");

    cy.get('[data-testid="transaction-row"]').should("have.length", 10);

    cy.get('[data-testid="transaction-row"]')
      .first()
      .invoke("text")
      .then((pageOneRow) => {
        cy.get('[data-testid="next-page"]').click();

        // Page 2 validation

        cy.get('[data-testid="current-page"]').should("contain", "2");

        cy.get('[data-testid="transaction-row"]')
          .first()
          .invoke("text")
          .should((pageTwoRow) => {
            expect(pageTwoRow).not.equal(pageOneRow);
          });
      });
  });
});
