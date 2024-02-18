// test suite
describe("login feature", () => {
  before(() => {});

  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  // auto-wait for 4 seconds

  // test case
  it("test valid login", () => {
    cy.get('[placeholder="Username"]').clear().type("Admin"); // 4secs
    cy.get('[placeholder="Password"]').clear().type("admin123"); // 4 secs
    cy.get('[type="submit"]').click(); // 4 secs

    // url assertion
    cy.url().should("include", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  it("test valid login with xpath usage", () => {
    cy.xpath("//input[@placeholder='Username']").clear().type("Admin"); // 4secs
    cy.xpath("//input[@placeholder='Password']").clear().type("admin123"); // 4 secs
    cy.xpath("//button[@type='submit']").click(); // 4 secs

    // url assertion
    cy.url().should("include", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  // it("call login function", () => {});
  // cy.userSignup();
  // cy.userLogin();
});
