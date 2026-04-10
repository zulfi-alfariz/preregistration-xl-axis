class ConfirmationPage {

  verifyPageLoaded() {
    cy.contains("Konfirmasi").should("be.visible");
  }

  clickRegister() {
    cy.contains("Registrasi").click();
  }
}

export default new ConfirmationPage();