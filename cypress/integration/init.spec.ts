/// <reference types="cypress" />

describe('Todo List', () => {
  it('visits the Todo List single page app', () => {
    cy.visit('http://localhost:3000/');
  });

  it('finds the content "Todo List"', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Todo List');
  });

  it('has existing input field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input');
  });

  it('types a todo into the input field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('Pick up dry cleaning');
  });

  it('adds a todo to the list of todos', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input')
      .type('Pick up dry cleaning')
      .get('button')
      .click();
  });
});
