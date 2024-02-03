// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// custom commands
Cypress.Commands.add("userLogin", () => {
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

Cypress.Commands.add("userSignup", () => {
  // add steps for user signup
});

Cypress.Commands.add("switchToIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});