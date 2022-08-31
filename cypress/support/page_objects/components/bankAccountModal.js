export class BankAccountModalComponent {
  elements = {
    getStartedTitle: () => cy.get("[data-test='user-onboarding-dialog-title']"),
    getNextButton: () =>
      cy.get("[data-test='user-onboarding-dialog']").find("[data-test='user-onboarding-next']"),
    getFinishedTitle: () => cy.get("[data-test='user-onboarding-dialog']")
    .find("[data-test='user-onboarding-dialog-title']"),
    getDoneButton: () => cy.get("[data-test='user-onboarding-dialog']").find("[data-test='user-onboarding-next']"),
  };

  nextButton() {
    return this.elements.getNextButton();
  }

  getFinishedTitle() {
    return this.elements.getFinishedTitle();
  }

  getDoneButton() {
    return this.elements.getDoneButton();
  }

  getStartedTitle() {
    return this.elements.getStartedTitle();
  }
}

export const bankAccountModal = new BankAccountModalComponent();
