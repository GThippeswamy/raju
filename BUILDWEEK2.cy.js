
describe('Flipkart Login and Search Tests - Dynamic Fixes', () => {

  const closePopupIfExists = () => {
    cy.get('body').then(($body) => {
      if ($body.find('._2doB4z').length > 0) {
        cy.get('._2doB4z').click({ force: true });
      }
    });
  };

  const closeChallengerModalIfExists = () => {
    cy.get('body').then(($body) => {
      if ($body.find('#challenger-modal').length > 0) {
        cy.get('#challenger-modal').invoke('attr', 'style', 'display: none');
      }
    });
  };

  beforeEach(() => {
    cy.visit('https://www.flipkart.com', { failOnStatusCode: false });
    cy.wait(1500);
    closePopupIfExists();
    closeChallengerModalIfExists();
  });

  it('Logs in using mobile number and OTP if not already logged in', () => {
    cy.get('body').then(($body) => {
      const loginExists = $body.text().includes('Login');
      const profileExists = $body.text().includes('My Account') || $body.text().includes('Profile');

      if (loginExists && !profileExists) {
        cy.contains(/login/i, { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .trigger('mouseover');

        cy.contains('My Profile', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.url().should('include', '/account/login');

        cy.get('input[type="text"]', { timeout: 10000 })
          .first()
          .should('be.visible')
          .type('9398473184');

        cy.contains('Request OTP')
          .should('be.visible')
          .click();

        cy.get('input[type="text"]', { timeout: 10000 })
          .should('have.length.greaterThan', 1)
          .eq(1)
          .type('252632');

        cy.wait(2000);
        cy.go('back');
      }
    });
  });

  it('Checks Flipkart title', () => {
    cy.url().should('include', 'flipkart.com');
    cy.title().should('match', /Online Shopping Site for Mobiles|Flipkart/i);
  });

  it('Searches for shirts and clicks a result', () => {
    cy.get('body', { timeout: 20000 }).then(($body) => {
      const searchInput = $body.find('input[title="Search for products, brands and more"], input[name="q"]');
      if (searchInput.length > 0) {
        cy.wrap(searchInput.first())
          .should('be.visible')
          .click()
          .type('shirts men{enter}');
      }
    });

    cy.get('body', { timeout: 20000 }).then(($body) => {
      if ($body.find('div._1YokD2._3Mn1Gg').length > 0) {
        cy.get('div._1YokD2._3Mn1Gg').should('be.visible');
      }
    });

    cy.get('body').then(($body) => {
      if ($body.text().includes('Self Design')) {
        cy.contains('Self Design')
          .scrollIntoView()
          .should('be.visible')
          .invoke('removeAttr', 'target')
          .click({ force: true });

        cy.wait(3000);

        const sizes = ['L', 'M', 'XL', 'S'];
        cy.get('body', { timeout: 10000 }).then(() => {
          cy.get('button, div').each(($el) => {
            const text = $el.text().trim();
            if (sizes.includes(text)) {
              cy.wrap($el)
                .scrollIntoView()
                
                .click({ force: true });
              return false;
            }
          });
        });

        cy.wait(2000);

        cy.contains(/add to cart/i, { timeout: 10000 }).then(($btn) => {
          if ($btn.length > 0) {
            cy.wrap($btn)
              .scrollIntoView()
              .should('be.visible')
              .should('not.be.disabled')
              .click({ force: true });

            cy.wait(3000);

            cy.url().then((url) => {
              if (url.includes('/viewcart')) {
                cy.log('Navigated to cart');
              } else if (url.includes('/account/login')) {
                cy.log('Redirected to login');
              } else {
                cy.log('Still on product page or unknown state');
              }
            });
          }
        });
      }
    });
  });

  it('Clicks on Mobiles and then iPhones category', () => {
    closePopupIfExists();

    cy.get('body').then(($body) => {
      if ($body.find('div._34xRTS.NXhch9').length > 0) {
        cy.get('div._34xRTS.NXhch9').invoke('attr', 'style', 'display: none');
      }
    });

    cy.get('a[aria-label="Mobiles"]', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.url().should('include', 'mobile-phones');

    cy.wait(3000);
    cy.get('body').then(($body) => {
      if ($body.text().toLowerCase().includes('iphone')) {
        cy.contains(/iphone/i, { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click({ force: true });
      } else if ($body.text().toLowerCase().includes('apple')) {
        cy.contains(/apple/i, { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click({ force: true });
      } else {
        cy.log('iPhone or Apple category not found on the page.');
        cy.screenshot('iphone_category_not_found');
      }
    });
  });

  it('Scrolls vertically to last visible offer section', () => {
  cy.wait(3000);
  cy.scrollTo('bottom', { ensureScrollable: false });
  cy.wait(2000);

  cy.get('div:visible', { timeout: 10000 }).last()
    .scrollIntoView({ ensureScrollable: false })
    .should('be.visible');
});


});
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