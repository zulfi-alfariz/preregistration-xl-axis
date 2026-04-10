class LandingPage {

  // visit dengan auth untuk env staging
  visit() {
    cy.visitWithAuth("/");
  }

  // verify bahwa berhasil masuk ke app
  verifyEnterPage() {
    cy.contains("Pilih Tipe Registrasi").should("be.visible");
  }

  // memilih registrasi dengan tipe Biometric
  chooseBiometric() {
    cy.contains("Biometric Registration").click();
  }

  // memilih registrasi dengan tipe Non-Biometric
  chooseNonBiometric() {
    cy.contains("Non Biometric Registration").click();
  }

  // check Privacy Policy & TnC
}

export default new LandingPage();