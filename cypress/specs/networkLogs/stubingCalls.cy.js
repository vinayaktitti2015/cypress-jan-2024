const payload = require("../../fixtures/stub.json");
describe("spying calls", () => {
  it("spy the ID+G website and verify the response", () => {
    // network request
    cy.intercept(
      "POST",
      "https://www.instagram.com/api/v1/web/accounts/login/ajax/",
      {
        statusCode: 200,
        body: {
          message:
            "your password was correct. Please double-check your password.",
          status: "pass",
        },
      }
    ).as("response");

    // switch to the ui automation
    cy.visit("https://www.instagram.com/");
    try {
      cy.get("._a9_0").click();
      cy.get(".x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl").click();
    } catch (e) {
      console.warn(e.message);
    }
    cy.xpath("//input[@name='username']").clear().type("934434343");
    cy.xpath("//input[@name='password']").clear().type("Test@221212");
    cy.xpath("//button[@type='submit']")
      .click()
      .then(() => {
        cy.wait("@response").should(({ response }) => {
          expect(response.body).to.have.property("status", "pass");
          expect(response.statusCode).to.equal(200);

          console.log("response ", response);
        });
      });
  });
});
