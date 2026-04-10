import landingPage from "../../../pages/landingPage";
import registrationPage from "../../../pages/registrationPage";

describe("Biometric - OTP Validation", () => {

  beforeEach(() => {
    cy.startFromBiometric("OTP");
  });

  it("TC003 Auto - Validate Field Only Numbers OTP Section", () => {
    cy.fillOTPForm("OTPwithAlpha");
    registrationPage.validateFieldOnlyNumbers(
        '[name="nomor_hp"]',
        '[name="nomor_nik"]');
  });

  it("TC004 Auto - Completed Fill Form OTP til Liveness", () => {
    cy.fillOTPForm("validOTP");
    cy.continueRegist();

    cy.contains("Foto Selfie").should('be.visible');
  });

  it("TC005 Auto - Cannot Continue to Liveness (INVALID MSISDN)", () => {
    cy.fillOTPForm("OTPinvalidMSISDN");

    registrationPage.checkTnC();
    registrationPage.checkButtonDisabled();
  });

    it("TC006 Auto - Cannot Continue to Liveness (INVALID NIK)", () => {
    cy.fillOTPForm("OTPinvalidNIK");

    registrationPage.checkTnC();
    registrationPage.checkButtonDisabled();
  });

});