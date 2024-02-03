describe('test suite', () => {
    it('', () => {
        cy.get("loca")
          .invoke("removeAttr", "readonly")
          .type("999{enter}")

        
    });
});