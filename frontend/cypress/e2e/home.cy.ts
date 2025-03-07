describe('Distance Calculation App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should calculate distance between two points correctly', () => {
    cy.get('input[name="point1-latitude"]').type('52.246280')
    cy.get('input[name="point1-longitude"]').type('21.084895')

    cy.get('input[name="point2-latitude"]').type('52.235951')
    cy.get('input[name="point2-longitude"]').type('21.084010')

    cy.get('button[type="submit"]').click()

    cy.get('.result-container').should('be.visible')
    cy.get('.result-container').should('contain.text', 'km')
  })

  it('should not allow submission when inputs are empty', () => {
    cy.get('button[type="submit"]').should('be.disabled')

    cy.get('input[name="point1-latitude"]').type('52.2298')
    cy.get('button[type="submit"]').should('be.disabled')

    cy.get('input[name="point1-longitude"]').type('21.0122')
    cy.get('input[name="point2-latitude"]').type('41.9028')

    cy.get('input[name="point2-longitude"]').type('12.4964')
    cy.get('button[type="submit"]').should('not.be.disabled')
  })

  it('should display "Points are the same." when coordinates are identical', () => {
    cy.get('input[name="point1-latitude"]').type('52.2298')
    cy.get('input[name="point1-longitude"]').type('21.0122')
    cy.get('input[name="point2-latitude"]').type('52.2298')
    cy.get('input[name="point2-longitude"]').type('21.0122')

    cy.get('button[type="submit"]').click()

    cy.get('.result-container').should('contain.text', 'Points are the same.')
  })
})
