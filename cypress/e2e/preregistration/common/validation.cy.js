import landingPage from "../../../pages/landingPage";
import registrationPage from "../../../pages/registrationPage";
import { getValidationData } from "../../../utils/dataHelper";

describe("Common Validation", () => {

  beforeEach(() => {
    landingPage.visit();
  });

  it("TC001 Auto - Validate URL PrePaid XL/Axis", () => {
    landingPage.verifyEnterPage();
  });

  it("TC002 Auto - Validate all fields (realtime + submit)", () => {

  const testData = getValidationData();

  landingPage.chooseBiometric();
  registrationPage.selectPUKMethod();

  cy.wrap(testData).each((data) => {
    cy.startFromBiometric("PUK"); // reset state

    cy.log(`${data.field} - ${data.trigger}`);

    cy.validateField(data);

  });

});


});