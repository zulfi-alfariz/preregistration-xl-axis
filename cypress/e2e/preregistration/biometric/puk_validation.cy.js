import landingPage from "../../../pages/landingPage";
import registrationPage from "../../../pages/registrationPage";

describe("Biometric - PUK Validation", () => {

  beforeEach(() => {
    cy.startFromBiometric("PUK");
  });

  it("TC007 Auto - Validate 'Lihat Puk' XL/Axis", () => {
    registrationPage.clickLihatPUK();
    registrationPage.verifyPUKPopupVisible();
    registrationPage.clickOKPopup();
  } 
  )

  it("TC008 Auto - Validate Field Only Numbers PUK Section", () => {
    cy.fillPUKForm("PUKwithAlpha");
    registrationPage.validateFieldOnlyNumbers(
        '[name="nomor_hp"]',
        '[name="nomor_nik"]',
        '[name="nomor_puk"]');
  });

  it("TC009 Auto - Completed Fill Form PUK til Liveness", () => {
    cy.fillPUKForm("validPUK");
    cy.continueRegist();

    cy.contains("Foto Selfie").should('be.visible');
  });

  it("TC010 Auto - Validate can't click button 'Lanjutkan' without checklist 'TnC'", () => {
    cy.fillPUKForm("validPUK");

    registrationPage.checkButtonDisabled();
  });

  it("TC011 Auto - Cannot Continue to Liveness (INVALID MSISDN)", () => {
    cy.fillPUKForm("PUKinvalidMSISDN");

    registrationPage.checkTnC();
    registrationPage.checkButtonDisabled();
  });

  it("TC012 Auto - Cannot Continue to Liveness (INVALID NIK)", () => {
    cy.fillPUKForm("PUKinvalidNIK");

    registrationPage.checkTnC();
    registrationPage.checkButtonDisabled();
  });

  it("TC013 Auto - Cannot Continue to Liveness (INVALID PUK)", () => {
    cy.fillPUKForm("PUKinvalidPUK");
    cy.continueRegist();
    
    cy.contains("PUK tidak ditemukan").should('be.visible');
  });

});