/// <reference types="cypress" />

import { signUpPage } from "../../support/page_objects/pages/signUpPage";
import { bankAccountModal } from "../../support/page_objects/components/bankAccountModal";
import { logInPage } from "../../support/page_objects/pages/logInPage";

describe("Sign up and login scenarios", () => {
  before(() => {
    cy.login();
  });

  // Creation of a user and login to confirm the user was created successfully.
  it("Should sign up and log in", () => {
    const userInfo = {
      firstName: "Mario",
      lastName: "Casas",
      username: "matraca",
      password: "password",
    };

    // LOGOUT
    cy.get("[data-test='sidenav-signout']").click();

    logInPage.signUp();
    signUpPage.createUser(
      userInfo.firstName,
      userInfo.lastName,
      userInfo.username,
      userInfo.password
    );

    logInPage.setUsername(userInfo.username);
    logInPage.setPassword(userInfo.password);
    cy.submit_form();
    bankAccountModal.getStartedTitle().should("contain", "Get Started");
  });

  // Validates the user is logged in into the app
  it("Should login using username and password", () => {
    //cy.login();
    cy.get("[data-test='sidenav-username']").should("be.visible");
    cy.contains("Logout").should("be.visible");
  });

  // This logs the user out
  it("Should logout the current user from the app", () => {
    cy.get("[data-test='sidenav-signout']").click({ force: true });
    cy.contains("Sign in").should("be.visible");
  });

  // Validates error message validation when logging in with an invalid username
  it("Should validate if the username is not correct", () => {
    let username = "Matiala";
    cy.login(username);
    signUpPage.getValidationErrorMessage().should("be.visible");
    signUpPage.getValidationErrorMessage().should("contain", "invalid");
  });

  // Validates error message validation when logging in with an invalid password
  it("Should validate if the password is not correct", () => {
    cy.login(Cypress.env("username"), "TestData1");
    signUpPage.getValidationErrorMessage().should("be.visible");
    signUpPage.getValidationErrorMessage().should("contain", "invalid");
  });
});
