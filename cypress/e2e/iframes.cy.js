/// <reference types="cypress" />
describe("iframes handling", () => {
  it("datepicker handling", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //switch to iframe
    cy.switchToIframe("#frame-one796456169")
      .find("#RESULT_TextField-0")
      .type("John Smith");

    cy.switchToIframe("#frame-one796456169")
      .find('[for="RESULT_RadioButton-1_0"]')
      .click();

    cy.switchToIframe("#frame-one796456169")
      .find("#RESULT_TextField-2")
      .clear()
      .type("01/28/2024");

    cy.switchToIframe("#frame-one796456169").find("#FSsubmit").click();
  });

  it("cypress-iframe usage - datepicker handling", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //switch to iframe
    cy.frameLoaded();
    cy.iframe("#frame-one796456169")
      .find("#RESULT_TextField-0")
      .type("John Smith");

    cy.iframe("#frame-one796456169")
      .find('[for="RESULT_RadioButton-1_0"]')
      .click();

    cy.iframe("#frame-one796456169")
      .find("#RESULT_TextField-2")
      .clear()
      .type("01/28/2024");

    cy.iframe("#frame-one796456169").find("#FSsubmit").click();
  });
});
