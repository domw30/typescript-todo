/// <reference types="cypress" />

describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('visits the Todo List single page app', () => {});

  it('finds the content "Todo List"', () => {
    cy.get('h1');
    cy.contains('Todo List');
  });

  it('has existing input field', () => {
    cy.get('form');
  });

  it('types a todo into the input field', () => {
    cy.get('form').type('Pick up dry cleaning');
  });

  it('adds a todo to the list of todos', () => {
    cy.get('form')
      .type('Pick up dry cleaning')
      .submit();
  });

  it('adds multiple todos using the add todo button', () => {
    cy.get('form').type('Pick up dry cleaning');
    cy.get('button').click();
    cy.get('form').type('Clean the kitchen');
    cy.get('[data-type="add-button"]').click();
  });

  it('adds and displays mulitple todos to the list by Enter key', () => {
    cy.get('form')
      .type('Pick up dry cleaning')
      .submit();
    cy.get('form')
      .type('Order more bananas')
      .submit();
    cy.get('form')
      .type('Clean the kitchen')
      .submit();
    cy.get('form')
      .type('Walk the dog')
      .submit();
    cy.get('form')
      .type('Finish CY testing')
      .submit();
  });

  it('overflow allows scroll to bottom of todo list', () => {
    cy.get('form')
      .type('Todo1')
      .submit()
      .get('form')
      .type('Todo2')
      .submit()
      .get('form')
      .type('Todo3')
      .submit()
      .get('form')
      .type('Todo4')
      .submit()
      .get('form')
      .type('Todo5')
      .submit()
      .get('form')
      .type('Todo6')
      .submit()
      .get('form')
      .type('Todo7')
      .submit()
      .get('form')
      .type('Todo8')
      .submit()
      .get('form')
      .type('Todo9')
      .submit()
      .get('form')
      .type('Todo10')
      .submit();
    cy.get('section').scrollTo('bottom');
  });
});
