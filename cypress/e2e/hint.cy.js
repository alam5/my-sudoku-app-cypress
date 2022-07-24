/// <reference types="cypress" />
/* eslint-disable no-undef */
describe('Hint', () => {
  it('click empty cell and hint button', () => {
    
    cy.visit('/')

    cy.get('.game__cell')
      .not('.game__cell--filled').each(($cell) => {
        cy.wrap($cell).click()
        cy.get('.status__action-hint').click()

    })
  
   cy.contains('h2.overlay__text','You solved it').should('be.visible')

  })
})