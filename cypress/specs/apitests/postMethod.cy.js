describe("post method http requests", () => {
  let token = "";

  beforeEach(() => {
    cy.request({
      method: "POST",
      url: Cypress.env("API_BASEURL") + "/api/register",
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      token = response.token;
      console.log("token: " + token);
    });
  });
  it("create user record endpoint", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("API_BASEURL") + Cypress.env("CREATE_USER"),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", "morpheus");
      expect(response.body).to.have.property("job", "leader");
    });
  });
});
