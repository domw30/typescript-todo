/// <reference types="cypress" />

describe('Todo List', () => {
  it('Visits the Todo List single page app', () => {
    cy.visit('http://localhost:3000/');
  });
});
