class RegistrationPage {

  // verify masuk ke page Registrasi setelah memilih tipe registrasi
  verifyRegPage() {
    cy.contains("Pilih Cara Registrasi").should("be.visible");
  }

  // pilih regist pakai OTP
  selectOTPMethod() {
    cy.contains("Menggunakan OTP").click();
  }

  // pilih regist pakai PUK
  selectPUKMethod() {
    cy.contains("Menggunakan PUK").click();
  }

  // input nomor HP / MSISDN
  inputMSISDN(msisdn) {
    cy.get('[name="nomor_hp"]').type(msisdn);
  }

  // input NIK
  inputNIK(nik) {
    cy.get('[name="nomor_nik"]').type(nik);
  }

  // input PUK
  inputPUK(puk) {
    cy.get('[name="nomor_puk"]').type(puk);
  }

  // checklist TnC
  checkTnC() {
    cy.get("#termsAccepted")
      .check({ force: true })
      .should("be.checked");
  }

  // cek nomor
  checkCekNomor() {
    cy.contains('button', 'Cek Nomor')
      .should('not.be.disabled')
      .click();
  }

  // validasi button Lanjutkan
  checkButtonDisabled() {
    cy.contains('button', 'Lanjutkan')
      .should('be.disabled')
  }

  // klik Lihat PUK
  clickLihatPUK() {
    cy.contains("button", "Lihat PUK").click();
  }

  // lanjutkan registrasi
  clickContinue() {
    cy.contains("Lanjutkan").click();
  }

  // validasi bahwa form terisi hanya dengan angka
  validateFieldOnlyNumbers(...selector) {
    selector.forEach((selector) => {
        cy.get(selector)
          .invoke('val')
          .and('not.match', /[a-zA-Z]/);
    });

  }

  // validasi pop-up PUK muncul
  verifyPUKPopupVisible() {
    // 1. Validasi Judul (Heading)
    cy.contains('h2', 'Nomor PUK', { timeout: 10000 })
      .should('be.visible');

    // 2. Validasi Teks Deskripsi (Opsional tapi bagus untuk akurasi)
    cy.contains('p', 'Nomor PUK terdapat di bagian bawah cangkang', { timeout: 10000 })
      .should('be.visible');

    // 3. Validasi Tombol OK ada di dalam pop-up tersebut
    cy.contains('button', 'OK').should('be.visible');
  }

  // Method untuk menutup pop-up dengan klik tombol OK
  clickOKPopup() {
    cy.contains('button', 'OK').click();
  }

  // verify nomor yang belum punya paket
  verifyNoPackagePopup() {
    cy.contains('h2', 'Cek Nomor').should('be.visible');
    
    cy.contains('p', 'Anda belum memiliki paket').should('be.visible');
    
    cy.contains('button', 'Beli Paket').should('be.visible');
  }

}

export default new RegistrationPage();