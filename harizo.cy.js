describe('Flipkart Horizontal Scroll Test', () => {
  it('Scrolls horizontally in Top Offers section', () => {
    cy.visit('https://www.flipkart.com');
    cy.wait(5000);

    cy.get('body').then($body => {
      if ($body.find('button._2KpZ6l._2doB4z').length > 0) {
        cy.get('button._2KpZ6l._2doB4z').click({ force: true });
      }
    });

    cy.get('h2', { timeout: 10000 }).each(($el) => {
      const text = $el.text().toLowerCase();
      if (text.includes('top offers') || text.includes('deals of the day') || text.includes('featured deals')) {
        cy.wrap($el)
          .scrollIntoView({ ensureScrollable: false })
          .parent()
          .scrollTo('right', { duration: 1000, ensureScrollable: false });
      }
    });
  });
});