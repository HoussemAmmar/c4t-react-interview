describe('Pagination', () => {
  it('should navigate through pages correctly', () => {
    cy.visit('/');
    cy.get('[data-testid=page-number]').should('have.text', '1');
    cy.get('[data-testid=next-page]').click();
    cy.get('[data-testid=page-number]').should('have.text', '2');
    cy.get('[data-testid=prev-page]').click();
    cy.get('[data-testid=page-number]').should('have.text', '1');
  });
});
