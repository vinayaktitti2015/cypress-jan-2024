/// <reference types="cypress" />

// import node from 'cypress';

// test suite
describe("login feature", () => {
  before(() => {
    cy.log("db connection established");
  });

  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('[placeholder="Username"]').clear().type("Admin"); // 4secs
    cy.get('[placeholder="Password"]').clear().type("admin123"); // 4 secs
    cy.get('[type="submit"]').click(); // 4 secs
  });

  // test case
  it("test dashboard visibility", () => {
    // url assertion
    cy.url().should("include", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  it("test Admin module", () => {
    cy.contains("Admin").should("be.visible").click();
    cy.contains("System Users").should("be.visible");
  });
});

/**
 * it.only to execute specific tests
 * it.skip to not execute specific tests
 */
