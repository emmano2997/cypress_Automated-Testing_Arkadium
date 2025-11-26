describe('template spec', () => {

  // Ignora erros do React
  Cypress.on('uncaught:exception', () => false)

  beforeEach(() => {
    cy.visit('https://www.arkadium.com/')
  })

  it('Support button and verify all required', () => {
    cy.get('[data-testid="topbar-support-icon"]')
      .should('be.visible')
      .click({ force: true })

    cy.get('[data-testid="support-chat-with-us"]').should('be.visible')
    cy.get('[data-testid="support-faqs"]').should('be.visible')
    cy.get('[data-testid="support-contact-support"]').should('be.visible')
    cy.get('[data-testid="support-whatsapp"]').should('be.visible')
  })

  it('Crosswords search', () => {
    cy.wait(1000)
    cy.get('[data-testid="sidebar-hamburger-icon"]')
      .should('be.visible')
      .click({ force: true }) 
    
    cy.get('[data-testid="search-input"]', { timeout: 15000 })
      .filter(':visible')    
      .should('have.length', 1)
      .type('Crosswords{enter}') // enter não esta indo 
    
    cy.url().should('include', 'search')
    
    cy.contains('results for', { timeout: 15000 })
      .should('be.visible')
    
    cy.url().should('include', 'crosswords') 

//verifique se o resultado esperado aparece na lista de sugestões ou resultados
    cy.get('.ygokw23') 
          .should('contain', 'crosswords')
          .and('be.visible')

        cy.get('[data-testid="grid-sc"]')
          .should('have.length.greaterThan', 0)
          .should('contain', 'Crossword') 

  })

  it(' list of Best Games', () => {
    cy.wait(2000)
    cy.get('[data-testid="sidebar-hamburger-icon"]')
      .should('be.visible')
      .click({ force: true })    

    cy.get('a.mbv8er6') 
      .contains('Best')
      .should('be.visible')
      .click({ force: true });

    cy.url().should('include', '/best/')

    cy.get('div._1aw5bfk0', { timeout: 15000 })
      .should('be.visible')
      .as('gamesContainer')
    //valide se uma lista pré-definida de jogos

    const expectedBestGames = [
      'Bubble Shooter',
      'Daily Crossword',
      'Mahjong',
      'Spider Solitaire',
      'Word Wipe',
      'Family Feud',
      'Bridge'
    ]
    expectedBestGames.forEach(gameName => {
      cy.get('@gamesContainer')
        .contains('[data-testid="card-title"]', gameName, { matchCase: false })
        .should('be.visible')
        .then(($element) => {
          cy.log(`✅ ${gameName} encontrado na lista Best`)
        })
    })

    cy.get('[data-testid="grid-sc"]')
      .should('have.length.at.least', expectedBestGames.length)

  })
})
