// custom commands
import CommonPage from "../pages/commonPage.po.js";
import RegisterPage from "../pages/registerPage.po.js";
import {faker} from "@faker-js/faker";

Cypress.Commands.add("userRegister", () => {
  cy.fixture("register").then((data) => {
    const commonPage = new CommonPage();
    const registerPage = new RegisterPage();
    const email = faker.internet.email();

    commonPage.getRegisterLink().click();

    registerPage.getGender().check();
    registerPage.getFirstName().clear().type(data.firstName);
    registerPage.getLastName().clear().type(data.lastName);
    registerPage.getEmail().clear().type(email);
    registerPage.getCompany().clear().type(data.company);
    registerPage.getPassword().clear().type(data.password);
    registerPage.getConfirmPassword().clear().type(data.password);
    registerPage.getRegisterButton().click();
  });
});

Cypress.Commands.add("verifyRegisterMessage", (message) => {
  cy.contains(message).should("be.visible");
});
