import CommonPage from "../../pages/commonPage.po.js";
import { BASEURL, USERNAME } from "../../constants/constants.js";
describe("registration feature", () => {
  beforeEach(() => {
    // to call the env variables
    // Cypress.env
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl);

  });
  it("test valid user registration", () => {
    cy.fixture("register").then((data) => {
      cy.userRegister();
      cy.verifyRegisterMessage(data.message);
    });
  });
});
