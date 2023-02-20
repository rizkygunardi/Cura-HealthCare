/// <reference types="cypress" />

describe("Validate Login", () => {
  beforeEach("Visit", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.url().should("include", "herokuapp.com");
  });
  it("Login without demo account", () => {
    cy.get("h1").should("include.text", "CURA Healthcare Service");
    cy.get("#btn-make-appointment").click();
    cy.get("h2").should("include.text", "Login");
    cy.get("#txt-username")
      .type("Rizky Gunardi")
      .should("have.value", "Rizky Gunardi");
    cy.get("#txt-password")
      .type("Poseidon1234567890")
      .should("have.value", "Poseidon1234567890");
    cy.get("#btn-login").click();
    cy.get(".text-danger").should("be.visible");
  });
  it("Login with demo account", () => {
    cy.get("h1").should("include.text", "CURA Healthcare Service");
    cy.get("#btn-make-appointment").click();
    cy.get("h2").should("include.text", "Login");
    cy.get("#txt-username").type("John Doe").should("have.value", "John Doe");
    cy.get("#txt-password")
      .type("ThisIsNotAPassword")
      .should("have.value", "ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.get("h2").should("include.text", "Make Appointment");
  });
});
