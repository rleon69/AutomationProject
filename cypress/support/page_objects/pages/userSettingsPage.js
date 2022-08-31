export class UserSettingsPage {
  elements = {
    getFirstNameInput: () =>
      cy.get("form").then((form) => {
        cy.wrap(form).find("[data-test='user-settings-firstName-input']");
      }),
    getLastNameInput: () =>
      cy.get("form").then((form) => {
        cy.wrap(form).find("[data-test='user-settings-lastName-input']");
      }),
    getEmailInput: () =>
      cy.get("form").then((form) => {
        cy.wrap(form).find("[data-test='user-settings-email-input']");
      }),
    getPhoneNumberInput: () =>
      cy.get("form").then((form) => {
        cy.wrap(form).find("[data-test='user-settings-phoneNumber-input']");
      }),
  };

  // SET METHODS
  setFirstName(firstName) {
    this.elements.getFirstNameInput().clear().type(firstName);
  }

  setLastName(lastName) {
    this.elements.getLastNameInput().clear().type(lastName);
  }

  setEmail(email) {
    this.elements.getEmailInput().clear().type(email);
  }

  setPhoneNumber(phoneNumber) {
    this.elements.getPhoneNumberInput().clear().type(phoneNumber);
  }

  // GET METHODS
  getFirstName() {
    return this.elements.getFirstNameInput();
  }

  getLastName() {
    return this.elements.getLastNameInput();
  }

  getEmail() {
    return this.elements.getEmailInput();
  }

  getPhoneNumber() {
    return this.elements.getPhoneNumberInput();
  }
}

export const userSettings = new UserSettingsPage();
