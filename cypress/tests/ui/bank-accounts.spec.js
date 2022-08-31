/// <reference types="cypress" />

import { navigateTo } from "../../support/page_objects/pages/navigationPage";
import { bankAccount } from "../../support/page_objects/pages/bankAccountsPage";
import { signUpPage } from "../../support/page_objects/pages/signUpPage";
import { bankAccountModal } from "../../support/page_objects/components/bankAccountModal";
import { logInPage } from "../../support/page_objects/pages/logInPage";

describe("Bank Accounts Scenarios", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3001/graphql").as("bankAccounts");
    cy.intercept("POST", "http://localhost:3001/graphql", (req) => {
      if (req.body.operationName === "ListBankAccount") {
        req.alias = "ListBankAccount";
      } else if (req.body.operationName === "CreateBankAccount") {
        req.alias = "CreateBankAccount";
      }
    });
  });

  // This method create a user and a bank account from modal
  it("Should create bank account from modal", () => {
    const userInfo = {
      firstName: "Carmen",
      lastName: "Casta",
      username: "cartra",
      password: "password",
    };

    cy.visit("/");

    // Creates a new user
    logInPage.signUp();
    signUpPage.setFirstName(userInfo.firstName);
    signUpPage.setLastName(userInfo.lastName);
    signUpPage.setUsername(userInfo.username);
    signUpPage.setPassword(userInfo.password);
    signUpPage.setConfirmPassword(userInfo.password);
    cy.submit_form();

    // Login with the new user
    logInPage.setUsername(userInfo.username);
    logInPage.setPassword(userInfo.password);
    cy.submit_form();

    // Creates bank account from modal
    bankAccountModal.nextButton().click();
    bankAccount.setAccountInformation("Banco Prueba", "789456321", "B8KAY819P");
    cy.submit_form();
    bankAccountModal.getFinishedTitle().should("contain", "Finished");
    bankAccountModal.getDoneButton().click();
  });

  // This method creates and deletes a bank account
  it("Should create a bank account", () => {
    cy.login();
    navigateTo.bankAccountPage();
    // Create account
    let bankName = "Davivienda";
    let accountNumber = "457891235";
    let routingNumber = "657891235";

    bankAccount.getCreateButton().click({ force: true });
    bankAccount.setBankName(bankName);
    bankAccount.setRoutingNumber(routingNumber);
    bankAccount.setAccountNumber(accountNumber);
    cy.submit_form();

    cy.wait("@CreateBankAccount");
    cy.get("@CreateBankAccount").then((xhr) => {
      console.log(xhr);
      const accountId = xhr.response.body.data.createBankAccount.id;
      bankAccount.getAccountById(accountId).should("contain", "Delete");
    });
  });

  // Deletes the first available bank account on the bank account list
  it("Should delete the first active bank account", () => {
    cy.login();
    navigateTo.bankAccountPage();
    //cy.reload();
    cy.wait("@ListBankAccount");
    cy.get("@ListBankAccount").then((xhr) => {
      let accountsList = xhr.response.body.data.listBankAccount;
      let activeAccount = accountsList.find((account) => account.isDeleted === false);
      bankAccount.deletesBankAccount(activeAccount.id).click({ force: true });
      bankAccount.getDeletedAccountById(activeAccount.id).should("contain", "Deleted");
    });
  });
});
