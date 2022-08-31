export class CreateTransactionPage {
  elements = {
    getSearchBarInput: () => cy.get("form").find("input"),
    getRequestButton: () => cy.get("form").find("[data-test='transaction-create-submit-request']"),
    getPayButton: () => cy.get("form").find("[data-test='transaction-create-submit-payment']"),
  };
  // This method select the first matching contact
  selectAnSpecificContact(user_input) {
    this.elements.getSearchBarInput().type(user_input);
    cy.get("div").contains("span", user_input).click();
    //MuiListItemText-root MuiListItemText-multiline
  }

  // This method creates a new transaction with an amount and description desire
  transactionDetails(amount, detail) {
    cy.get("form").then((transactionForm) => {
      cy.wrap(transactionForm).find("#amount").type(amount);
      cy.wrap(transactionForm).find("#transaction-create-description-input").type(detail);
    });
  }

  //This method submits the transaction as a request type
  requestTransactionType() {
    this.elements.getRequestButton().click();
  }

  //This method submits the transaction as a pay type
  payTransactionType() {
    this.elements.getPayButton().click();
  }
}

export const createTransaction = new CreateTransactionPage();
