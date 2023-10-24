/// <reference types="cypress" />
describe("Home page visit", () => {

  it("visit landing page", () => {
    cy.visit("/");
    cy.contains("Compliance and Enforcement - Case Management");
  });
});
