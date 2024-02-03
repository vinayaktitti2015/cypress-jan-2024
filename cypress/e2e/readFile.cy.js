describe("read the contents", () => {
  it("read the login credentials and login to the app", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.readFile("cypress/fixtures/login.json").then((data) => {
      cy.get('[placeholder="Username"]').clear().type(data.username);
      cy.get('[placeholder="Password"]').clear().type(data.password);
      cy.get('[type="submit"]').click();
    });

    // url assertion
    cy.url().should("include", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });
});
