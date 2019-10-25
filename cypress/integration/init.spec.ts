/// <reference types="cypress" />

describe('Todo List', () => {
  it('visits the Todo List single page app', () => {
    cy.visit('http://localhost:3000/');
  });

  it('finds the content "Todo List"', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Todo List');
  });

  it('clicks the input field "Enter Todo"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input');
  });
});
