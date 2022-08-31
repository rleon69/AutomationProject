export class NavigationPage {
  elements = {
    bankAccount: () => cy.get("[data-test='sidenav-bankaccounts']"),
  };

  newTransactionPage() {
    cy.contains(" New").click();
  }
  notificationsPage() {
    cy.get("[data-test='nav-top-notifications-link']").click();
  }
  userSettingsPage() {
    cy.get("[data-test='sidenav-user-settings']").click();
  }

  signUpPage() {
    cy.get("[data-test='signup']").click();
  }

  bankAccountPage() {
    this.elements.bankAccount().click();
  }
}

export const navigateTo = new NavigationPage();
