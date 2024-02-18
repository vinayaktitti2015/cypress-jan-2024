const payload = require("../fixtures/payload.json");

Cypress.Commands.add("updateRecord", () => {
  cy.request({
    method: "PUT",
    url: Cypress.env("API_BASEURL") + "/api/users/2",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      fixture: payload,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    // expect(response.body).to.have.property("name", "morpheus");
    // expect(response.body).to.have.property("job", "Test Lead");

    assert.isNotNull(response.body.updatedAt);
  });
});
