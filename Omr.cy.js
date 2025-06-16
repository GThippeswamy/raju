
describe('Login Test for Multiple Users', () => {
  it('should test login for each user from fixture', () => {
    cy.fixture('example').then((data) => {
      data.users.forEach((user) => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.login(user);

        cy.url().then((url) => {
          if (url.includes("dashboard")) {
            cy.log(`✅ Login successful for ${user.username}`);
            cy.logout();
            cy.url().should('include', 'login');
          } else {
            cy.log(`❌ Login failed for ${user.username}`);
          }
        });
      });
    });
  });
});