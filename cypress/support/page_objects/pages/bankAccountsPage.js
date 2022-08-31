export class BankAccountPage {
  elements = {
    getCreateButton: () => cy.get("[data-test='bankaccount-new']"),
    getDeleteButton: () => cy.get("[data-test='bankaccount-delete']"),
    getBankAccountsList: () => cy.get("[data-test='bankaccount-list']"),
    getBankNameInput: () => cy.get("form").find("[data-test='bankaccount-bankName-input']"),
    getRoutingNumberInput: () =>
      cy.get("form").find("[data-test='bankaccount-routingNumber-input']"),
    getAccountNumberInput: () =>
      cy.get("form").find("[data-test='bankaccount-accountNumber-input']"),
  };

  // SET METHODS
  setBankName(bank_name) {
    this.elements.getBankNameInput().type(bank_name);
  }

  setRoutingNumber(routing_number) {
    this.elements.getRoutingNumberInput().type(routing_number);
  }

  setAccountNumber(account_number) {
    this.elements.getAccountNumberInput().type(account_number);
  }

  setAccountInformation(bank_name, account_number, routing_number) {
    this.elements.getBankNameInput().type(bank_name);
    this.elements.getRoutingNumberInput().type(routing_number);
    this.elements.getAccountNumberInput().type(account_number);
  }

  getCreateButton() {
    return this.elements.getCreateButton();
  }

  getBankAccountsList() {
    return this.elements.getBankAccountsList();
  }

  // This method returns an account by ID
  getAccountById(accountId) {
    return this.elements
      .getBankAccountsList()
      .find(`[data-test='bankaccount-list-item-${accountId}']`);
  }
  // This method is only for deleted accounts
  getDeletedAccountById(accountId) {
    return this.elements
      .getBankAccountsList()
      .find(`[data-test='bankaccount-list-item-${accountId}']`)
      .children("div")
      .find("p");
  }

  // Method to locate a delete button by account ID
  deletesBankAccount(accountId) {
    return this.elements
      .getBankAccountsList()
      .find(`[data-test='bankaccount-list-item-${accountId}']`)
      .find("[data-test='bankaccount-delete']");
  }
}

export const bankAccount = new BankAccountPage();
