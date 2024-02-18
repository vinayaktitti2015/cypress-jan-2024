import CommonPage from "../../pages/commonPage.po.js";
import { BASEURL, USERNAME } from "../../constants/constants.js";
describe("mobile view", () => {
  beforeEach(() => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.viewport("ipad-mini");
  });
  it("test valid user registration", () => {
    cy.get(".menu-toggle")
      .should("be.visible")
      .invoke("show")
      .invoke("removeAttr", "display");
    cy.get('ul.top-menu.mobile')
      .click({force: true})
      .then(() => {
        cy.xpath(
          "//ul[@class='top-menu mobile']//a[normalize-space()='Computers']"
        ).should("be.visible");
      });
  });
});
