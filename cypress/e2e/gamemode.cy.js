/* eslint-disable no-undef */
/// <reference types ="cypress" />

describe('Game mode', () => {
  it('shows 10 sec', () => {
   
    cy.visit('/')

    cy.get('.status__difficulty-select').should('have.value','Easy')

    //Easy mode game cells

    cy.get('.game__cell.game__cell--filled')
    .should('have.length.lessThan',81)
    .and('have.length.greaterThan',44)
    .its('length')
    .as('EasyN')

    //select medium and count Medium game cells

    cy.get('.status__difficulty-select').select('Medium')
    cy.get('.game__cell.game__cell--filled').should('have.length.lessThan',81)
    .its('length')
    .as('MediumN')


    //select Hard and count Hard game cells
    cy.get('.status__difficulty-select').select('Hard')
    cy.get('.game__cell.game__cell--filled').should('have.length.lessThan',81)
    .its('length')
    .as('HardN')
    .then(function(){

    expect(this.EasyN,'Easy:').to.be.greaterThan(this.MediumN)
    expect(this.MediumN,'Medium').to.be.greaterThan(this.HardN)  

    })






  
 



  })
})