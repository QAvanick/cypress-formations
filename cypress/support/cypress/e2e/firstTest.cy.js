describe('Test visit of Ayilla site', () => {
  it('should visit the ayilla.com homepage', () => {
    cy.visit('https://www.ayilla.com/')
    cy.url().should('include', 'ayilla.com')
  })
})
