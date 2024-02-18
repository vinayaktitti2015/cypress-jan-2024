describe("session mang handling", () => {
  beforeEach(() => {
    cy.userLogin("admin");
  });
  it("Admin module", () => {

    cy.userLogin("admin");
    cy.visit("/web/index.php/dashboard/index")
    cy.contains("Admin").click();
    cy.contains("System Users").should("be.visible");
  });

  it("Leave module", () => {
    cy.userLogin("admin");
    cy.visit("/web/index.php/dashboard/index")
    cy.contains("Leave").click();
    cy.contains("Leave List").should("be.visible");
  });

  it("Recruitment module", () => {
    cy.userLogin("admin");
    cy.visit("/web/index.php/dashboard/index")
    cy.contains("Recruitment").click();
    cy.contains("Candidates").should("be.visible");
  });
});
