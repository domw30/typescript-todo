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
    cy.get('form');
  });

  it('types a todo into the input field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('form').type('Pick up dry cleaning');
  });

  it('adds a todo to the list of todos', () => {
    cy.visit('http://localhost:3000/');
    cy.get('form')
      .type('Pick up dry cleaning')
      .submit();
  });

  it('adds mulitple todos to the list of todos', () => {
    cy.visit('http://localhost:3000/');
    cy.get('form')
      .type('Pick up dry cleaning')
      .submit()
      .get('form')
      .type('Order more bananas')
      .submit()
      .get('form')
      .type('Clean the kitchen')
      .submit()
      .get('form')
      .type('Walk the dog')
      .submit()
      .get('form')
      .type('Finish CY testing')
      .submit();
  });
});
