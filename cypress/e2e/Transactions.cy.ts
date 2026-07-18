describe("Transactions page", () => {
  beforeEach(() => {
    cy.login();

    cy.get('[data-testid="nav-transactions"]').click();
  });

  it("Page through the transactions table and assert the page indicator", () => {

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

  it("Navigate to the last page", () => {
    for (let i = 0; i < 4; i++) {
      cy.get('[data-testid="next-page"]').click();
    }

    cy.get('[data-testid="current-page"]').should("contain", "5");
  });
});
