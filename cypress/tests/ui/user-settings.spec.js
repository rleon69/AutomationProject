/// <reference types="cypress" />

import { navigateTo } from "../../support/page_objects/pages/navigationPage";
import { userSettings } from "../../support/page_objects/pages/userSettingsPage";

describe("User Settings Scenarios", () => {
  beforeEach(() => {
    // if (cy.url().contains("/signin")) {
    //   cy.login();
    //   navigateTo.userSettingsPage();
    // }
    cy.login();
    navigateTo.userSettingsPage();
    cy.intercept("POST", "http://localhost:3001/graphql").as("publicData");
    cy.reload();
    cy.wait("@publicData");
    cy.get("@publicData").then((xhr) => {
      let userID = xhr.response.body.data.listBankAccount[0].userId;
      cy.intercept("PATCH", `http://localhost:3001/users/${userID}`).as("patchUser");
    });
  });

  it("Should update user First Name", () => {
    let firstName = "Camilo";

    userSettings.setFirstName(firstName);
    cy.submit_form();

    cy.wait("@patchUser");
    cy.get("@patchUser").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(204);
    });

    userSettings.getFirstName().should("have.value", firstName);
  });

  it("Should update user Last Name", () => {
    let lastName = "Zaik";

    userSettings.setLastName(lastName);
    cy.submit_form();

    cy.wait("@patchUser");
    cy.get("@patchUser").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(204);
    });

    userSettings.getLastName().should("have.value", lastName);
  });

  it("Should update user email", () => {
    let email = "laonara@gmail.com";

    userSettings.setEmail(email);
    cy.submit_form();

    cy.wait("@patchUser");
    cy.get("@patchUser").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(204);
    });

    userSettings.getEmail().should("have.value", email);
  });

  it("Should update user phone number", () => {
    let phoneNumber = "884-849-9170";

    userSettings.setPhoneNumber(phoneNumber);
    cy.submit_form();

    cy.wait("@patchUser");
    cy.get("@patchUser").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(204);
    });

    userSettings.getPhoneNumber().should("have.value", phoneNumber);
  });
});
