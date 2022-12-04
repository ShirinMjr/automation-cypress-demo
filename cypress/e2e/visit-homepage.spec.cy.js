describe("visit FieldWire homepage", () => {
  beforeEach(() => {
    cy.visit("https://www.fieldwire.com/");
  });

  it.only("User can visit Homepage successfully ", () => {
    cy.get(".title").should(
      "contains.text",
      "Jobsite Management For Construction Teams"
    );
    cy.get(".subtitle").should(
      "contains.text",
      "Fieldwire powers over 1,000,000 jobsites worldwide"
    );
    cy.get("li.nav-item.sign-up").click();

    cy.get(".terms.ng-scope").should(
      "have.text",
      "Create your free account to get started"
    );

    cy.get("button[type=submit]").should("have.attr", "aria-disabled", "true");
    cy.get("input#firstNameInput").type("Bill");
    cy.get("input#lastNameInput").type("Smart");
    cy.get("input#emailInput").type("tbillsmart@gmail.com");
    cy.get("input#passwordInput").type("strongpass@12");
    cy.get("input#explicitAgreement").click();
    cy.get("button[type=submit]").should("have.attr", "aria-disabled", "false");
    cy.get("button[type=submit]").click();
  });
});
