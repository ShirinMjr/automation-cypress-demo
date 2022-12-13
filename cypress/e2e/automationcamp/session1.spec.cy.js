describe("suit1", () => {
  //There are two ways of writing tests function()=>{} and ()=>{}
  it("1 - Google Search", function () {
    cy.visit("https://google.com");
    cy.get("input[name=q]").type("cypress");
  });

  it.only("2- Cypress Website", () => {
    cy.visit("https://cypress.io");

    cy.title().should(
      "eq",
      "JavaScript End to End Testing Framework | cypress.io testing tools"
    );
    cy.title().should("include", "End to End Testing Framework");
  });
});
