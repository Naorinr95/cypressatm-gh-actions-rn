describe('CSSLocators', () => {
  it('passes', () => {
    cy.visit('http://automationpractice.pl/index.php');
    cy.get('#search_query_top').type('Dress');
    cy.get("button[name='submit_search']").click();
    cy.get('.lighter').should('contain.text', 'Dress');
  });

  it('fails', () => {
    cy.visit('http://automationpractice.pl/index.php');
    cy.get('#search_query_top').type('Shoes');
    cy.get("button[name='submit_search']").click();
    cy.get('.lighter').should('contain.text', 'NonExistentText');
  });
});
