// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", () => {
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

Cypress.Commands.add("booking", () => {
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
