describe('CSSLocators', () => {
  it('searches for Dresses and verifies result', () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("#search_query_top").type("Dresses");
    cy.get("button[name='submit_search']").click();

    // Wait for result element and check text
    cy.get(".lighter", { timeout: 10000 }).should('contain.text', "Dresses");
  });

  it('searches for T-Shirts and verifies result', () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("#search_query_top").type("T-Shirts");
    cy.get("button[name='submit_search']").click();

    // Wait for result element and check text
    cy.get(".lighter", { timeout: 10000 }).should('contain.text', "T-Shirts");
  });
});