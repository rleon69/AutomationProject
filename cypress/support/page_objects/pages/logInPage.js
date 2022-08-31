export class LogInPage {
  url = "/signin";

  elements = {
    getUsernameInput: () => cy.get("[data-test='signin-username']"),
    getPasswordInput: () => cy.get("[data-test='signin-password']"),
    getRememberMeCheckbox: () => cy.get("[data-test='signin-remember-me']"),
    getSignUpHref: () => cy.get("[data-test='signup']"),
  };

  // SET METHODS
  setUsername(username) {
    this.elements.getUsernameInput().clear().type(username);
  }

  setPassword(password) {
    this.elements.getPasswordInput().clear().type(password);
  }

  setCheckbox() {
    this.elements.getRememberMeCheckbox().click();
  }

  signUp() {
    this.elements.getSignUpHref().click();
  }
}

export const logInPage = new LogInPage();
