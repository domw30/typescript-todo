/// <reference types="cypress" />

describe('Todo List App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Todo List Page On Load', () => {
    it('visits the Todo List single page app', () => {});

    it('finds the content "Todo List" on load', () => {
      cy.get('h1');
      cy.contains('Todo List');
    });

    it('has existing input field on load', () => {
      cy.get('form').should('be.visible');
    });

    it('should have a rotating Add Icon button on load', () => {
      cy.get('[data-type="add-button"]').should('be.visible');
    });
  });

  describe('Todo List Form and Section', () => {
    it('types a todo into the input field', () => {
      cy.get('form').type('Pick up dry cleaning');
    });

    it('adds a todo to the list of todos by Enter', () => {
      cy.get('form')
        .type('Pick up dry cleaning')
        .submit()
        .get('section')
        .should('have.text', 'Pick up dry cleaning');
    });

    it('adds and displays mulitple todos to the list by Enter', () => {
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
      cy.get('section')
        .scrollTo('bottom')
        .should('have.css', 'overflow');
    });
  });

  describe('Todo List Buttons', () => {
    it('adds multiple todos using the add todo button', () => {
      cy.get('input').type('Pick up dry cleaning');
      cy.get('[data-type="add-button"]').click();
      cy.get('input').type('Clean the kitchen');
      cy.get('[data-type="add-button"]')
        .click()
        .get('section')
        .contains('Pick up dry cleaning')
        .should('be.visible')
        .get('section')
        .contains('Clean the kitchen')
        .should('be.visible');
    });

    it('toggles complete by clicking check icon', () => {
      cy.get('input')
        .type('Pick up dry cleaning')
        .get('[data-type="add-button"]')
        .click()
        .get('section')
        .get('[data-type="check-button"]')
        .click()
        .get('[data-type="todo-item"]')
        .should('have.text', 'Pick up dry cleaning');
    });

    it('toggles incomplete by clicking check icon after being toggled complete', () => {
      cy.get('input')
        .type('Pick up dry cleaning')
        .get('[data-type="add-button"]')
        .click()
        .get('section')
        .get('[data-type="check-button"]')
        .click()
        .click()
        .get('[data-type="todo-item"]')
        .should('not.have.css', 'text-decoration', 'line-through');
    });

    it('should delete a todo by clicking delete icon button', () => {
      cy.get('input')
        .type('Pick up dry cleaning')
        .get('[data-type="add-button"]')
        .click()
        .get('section')
        .get('[data-type="delete-button"]')
        .click()
        .get('section')
        .contains('Pick up dry cleaning')
        .should('not.be.visible');
    });
  });
});
