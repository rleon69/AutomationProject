/// <reference types="cypress" />

import { logInPage } from "../support/page_objects/pages/logInPage.js";

Cypress.Commands.add("submit_form", () => {
  cy.get("form").submit();
});

Cypress.Commands.add(
  "login",
  (username = Cypress.env("username"), password = Cypress.env("password")) => {
    cy.visit("/signin");
    logInPage.setUsername(username);
    logInPage.setPassword(password);
    cy.submit_form();
  }
);
