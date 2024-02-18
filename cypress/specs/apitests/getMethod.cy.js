describe("get method http requests", () => {
  it("fetch single user endpoint", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("API_BASEURL") + Cypress.env("SINGLE_USER"),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("first_name", "Janet");
      expect(response.body.data).to.have.property("last_name", "Weaver");
    });
  });
});
