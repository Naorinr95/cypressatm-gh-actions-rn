describe('CSSLocators', () => {
    it('csslocators', () => {
      cy.visit("http://www.automationpractice.pl/index.php")
      cy.get("#search_query_top").type("Dresses")
      cy.get("button[name='submit_search']").click()
      cy.get(".lighter").contains("Dresses")
    })

    it('csslocators', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts")
        cy.get("button[name='submit_search']").click()
        cy.get(".lighter").contains("Dresses")
      })

  })