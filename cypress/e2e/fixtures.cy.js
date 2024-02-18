/// <reference types="cypress" />

describe("webui controls", () => {
  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/samplepagetest/");
  });
  it("test form submission successfully", () => {
    cy.fixture("user").then((testdata) => {
      // upload file
      cy.get("input[name='file-553']").selectFile("cypress/fixtures/sample.pdf");

      // input fields
      cy.get("#g2599-name").type(testdata.name);
      cy.get("#g2599-email").type(testdata.email);
      cy.get("#g2599-website").type(testdata.website);

      // fetch dropdown list
      cy.get("#g2599-experienceinyears option").each(($element) => {
        const label = $element.text();
        cy.log("dropdown list: " + label);
      });

      //cy.$("locator")

      // dropdown list
      cy.get("#g2599-experienceinyears")
        .select(testdata.exp)
        .should("have.value", testdata.exp);

      // checkbox and radio buttons
      cy.get("input[value='Automation Testing']")
        .should("not.be.checked")
        .check();

      cy.get("input[value='Post Graduate']").should("not.be.checked").check();

      // alert box
      cy.get("button[onclick='myFunction()']").click();
      cy.on("window:alert", () => {
        cy.on("window:confirm", () => true);
        cy.on("window:confirm", () => true);
      });

      // type comments
      cy.get("#contact-form-comment-g2599-comment").type(testdata.comments);
      cy.get("button[type='submit']").click();

      // verify form submission
      cy.contains(testdata.message).should("be.visible");

      // let text = "";
      // cy.get("loc").then(($element) => {
      //   text = $element.text();
      // });
    });
  });
});
