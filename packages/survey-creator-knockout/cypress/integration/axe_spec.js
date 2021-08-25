/// <reference types="cypress"/>
 
describe('Todo application', () => {
 it('should log any accessibility failures', () => {
   cy.visit('http://127.0.0.1:8080/testCafe/testcafe.html');
   cy.injectAxe();
   cy.checkA11y();
 });
});