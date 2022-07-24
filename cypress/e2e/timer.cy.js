/* eslint-disable no-undef */
describe('timer', () => {
  it('shows 10 sec', () => {
    cy.visit('/')
  for (let k = 0; k < 4; k++) {

    cy.contains('.status__time',`00:0${k}`)
    
  }

   
    cy.get('.game__cell--filled').should('have.length.greaterThan',20)

  })
})