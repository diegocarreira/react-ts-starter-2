/// <reference types="cypress" />

describe('CustomerForm screen integration test', () => {
  it('Access new customer page and render page with all fields empty', () => {
    cy.visit('/new-customer');
    // ... implementation goes here
  });

  it('Access edit customer page and render page with all fields filled', () => {
    cy.visit('/customer/1');
    // ... implementation goes here
  });
});
