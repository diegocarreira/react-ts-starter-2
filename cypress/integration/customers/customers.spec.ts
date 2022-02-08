/// <reference types="cypress" />

describe('Customer screen integration test', () => {
  beforeEach(() => {
    cy.visit('/customers');
  });

  it('displays a list with one or more customers', () => {
    cy.get('[data-testid="customer-name"]').should('have.length.at.least', 1);
  });
});
