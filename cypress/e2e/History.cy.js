/// <reference types= "cypress" />

describe("Validate History booking", () => {
  beforeEach("Visit", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.url().should("include", "herokuapp.com");
  });
  it("History", () => {
    cy.booking();
    cy.get("#menu-toggle").click();
    cy.get(":nth-child(4) > a").should("have.text", "History").click();
    cy.get("h2").should("have.text", "History");
  });
});
