export class SignUpPage {
  elements = {
    getFirstNameInput: () => cy.get("#firstName"),
    getLastNameInput: () => cy.get("#lastName"),
    getUsernameInput: () => cy.get("#username"),
    getpaswordInput: () => cy.get("#password"),
    getConfirmPasswordInput: () => cy.get("#confirmPassword"),
    getSignInHref: () => cy.get("[href='/signin']"),
    getValidationErrorMessage: () => cy.get("[data-test='signin-error']")
  };

  setFirstName(firstName) {
    this.elements.getFirstNameInput().type(firstName);
  }

  setLastName(lastName) {
    this.elements.getLastNameInput().type(lastName);
  }

  setUsername(username) {
    this.elements.getUsernameInput().type(username);
  }

  setPassword(password) {
    this.elements.getpaswordInput().type(password);
  }

  setConfirmPassword(confirmPassword) {
    this.elements.getConfirmPasswordInput().type(confirmPassword);
  }

  getSignInHref() {
    return this.elements.getSignInHref();
  }

  getValidationErrorMessage() {
    return this.elements.getValidationErrorMessage();
  }
  // This method edits all the fields in the user settings
  createUser(firstName, lastName, username, password) {
    cy.get("form").then((form) => {
      cy.wrap(form).find("#firstName").type(firstName);
      cy.wrap(form).find("#lastName").type(lastName);
      cy.wrap(form).find("#username").type(username);
      cy.wrap(form).find("#password").type(password);
      cy.wrap(form).find("#confirmPassword").type(password);
      cy.wrap(form).submit();
    });
  }
}

export const signUpPage = new SignUpPage();
