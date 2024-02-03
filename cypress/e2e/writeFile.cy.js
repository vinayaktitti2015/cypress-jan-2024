describe("writefile and readfile", () => {
  it("writeFile", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("div[class='orangehrm-login-error'] p:nth-child(1)")
      .invoke("text")
      .then((text) => {
        const username = text.substring(11, 16);

        cy.get("div[class='orangehrm-login-form'] p:nth-child(2)")
          .invoke("text")
          .then((text) => {
            const password = text.substring(11, 19);
            cy.writeFile("cypress/fixtures/login.json", {
              username: username,
              password: password,
            });
          });
      });
  });
});
