/// <reference types="cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Drap/drop', () => {

  it('Does not do much!', () => {
    cy.visit('http://localhost:8080/testCafe/testcafe.html')

    const dataTransfer = new DataTransfer;

    cy.get('div[aria-label="Single Input toolbox item"]')
      .trigger('dragstart', { dataTransfer });

    cy.get('.svc-page__content').eq(0)
      .trigger('dragover', { dataTransfer });

    cy.get('.svc-page__content').eq(0)
      .trigger('drop', { dataTransfer });

    cy.get('div[aria-label="Single Input toolbox item"]')
      .trigger('dragend'); 

      cy.get('div[aria-label="Single Input toolbox item"]')
      .trigger('dragstart', { dataTransfer });

    cy.get('.svc-page__content').eq(1)
      .trigger('dragover', { dataTransfer });

    cy.get('.svc-page__content').eq(1)
      .trigger('drop', { dataTransfer });

    cy.get('div[aria-label="Single Input toolbox item"]')
      .trigger('dragend'); 

    // const draggable = Cypress.$('div[aria-label="Single Input toolbox item"]')[0]  // Pick up this
    // const droppable = Cypress.$('.svc-page__content')[0]  // Drop over this

    // const coords = droppable.getBoundingClientRect()
    // draggable.dispatchEvent(new MouseEvent('mousedown'));
    // draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
    // draggable.dispatchEvent(new MouseEvent('mousemove', {
    //   clientX: coords.x+10,   
    //   clientY: coords.y+10  // A few extra pixels to get the ordering right
    // }));
    // draggable.dispatchEvent(new MouseEvent('mouseup'));

    expect(true).to.equal(true)
  })
})