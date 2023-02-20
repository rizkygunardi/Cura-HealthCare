/// <reference types="cypress" />

describe("Validate Booking HealthCare", () => {
  beforeEach("Visit", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.url().should("include", "herokuapp.com");
  });
  it("Fill teh form", () => {
    cy.login();
    cy.get("#combo_facility")
      .select("Seoul CURA Healthcare Center")
      .should("have.value", "Seoul CURA Healthcare Center");
    cy.get("#chk_hospotal_readmission").click();
    cy.get("#txt_visit_date").click();
    cy.get(":nth-child(4) > :nth-child(7)").click();
    cy.get("#txt_comment").type(
      "Saya ingin melakukan checkup pada kondisi kesehatan saya , dok. terima kasih"
    );
    cy.get("#btn-book-appointment").click();
    cy.get("h2").should("include.text", "Appointment Confirmation");
    cy.get(".text-center > .btn").click();
  });
});
