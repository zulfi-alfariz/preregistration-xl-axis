/// <reference types="cypress" />
import registrationPage from "../pages/registrationPage";
import landingPage from "../pages/landingPage";
import { getTestData } from "../utils/dataHelper";


Cypress.Commands.add("visitWithAuth", (url) => {
  cy.visit(url, {
    auth: {
      username: Cypress.env("BASIC_AUTH_USER"),
      password: Cypress.env("BASIC_AUTH_PASS")
    }
  });
});

Cypress.Commands.add("checkMsisdn", (msisdn) => {
    registrationPage.inputMSISDN(msisdn);
    registrationPage.checkCekNomor();
});

Cypress.Commands.add("fillOTPForm", (type) => {
    const data = getTestData(type);

    registrationPage.inputMSISDN(data.msisdn);
    registrationPage.inputNIK(data.nik);
});

Cypress.Commands.add("fillPUKForm", (type) => {
    const data = getTestData(type);

    registrationPage.inputMSISDN(data.msisdn);
    registrationPage.inputNIK(data.nik);
    registrationPage.inputPUK(data.puk);
});

Cypress.Commands.add("continueRegist", () => {
    registrationPage.checkTnC();
    registrationPage.clickContinue();
});

Cypress.Commands.add("startFromBiometric", (method = "PUK") => {
    landingPage.visit();
    landingPage.chooseBiometric();

    if (method === "PUK") {
        registrationPage.selectPUKMethod();
    }

    if (method === "OTP") {
        registrationPage.selectOTPMethod();
    }

    cy.get('[name="nomor_hp"]').should('be.visible')
});

Cypress.Commands.add("validateField", ({ field, value, error, trigger }) => {

  const env = Cypress.env();

  if (trigger === "realtime") {

    const fieldMap = {
      msisdn: () => registrationPage.inputMSISDN(value),
      nik: () => registrationPage.inputNIK(value),
      puk: () => registrationPage.inputPUK(value)
    };

    fieldMap[field]();

  }

  if (trigger === "submit") {

    // isi dulu yang valid
    registrationPage.inputMSISDN(env.VALID_MSISDN);
    registrationPage.inputNIK(env.VALID_NIK);
    registrationPage.inputPUK(value);

    registrationPage.checkTnC();
    registrationPage.clickContinue();
  }

  cy.contains(error).should("be.visible");
});

Cypress.Commands.add("verifyErrorMessage", (message) => {
  cy.contains(message).should("be.visible");
});

