/* eslint-disable no-undef */
describe('Clocking', () => {
  it('chekc tiem after 700 seconds', () => {
   
    cy.clock()
    cy.visit('/')
    cy.contains('.status__time','00:00').should('have.text','00:00')
    cy.tick(640_000)
    cy.contains('.status__time','10:40')


  


  })
})