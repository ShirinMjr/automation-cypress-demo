describe("visit FieldWire homepage", () => {
  beforeEach(() => {
    cy.visit("https://www.fieldwire.com/");
  });

  it("User can visit Homepage successfully ", () => {
    cy.get(".title").should(
      "contains.text",
      "Jobsite Management For Construction Teams"
    );
    cy.get(".subtitle").should(
      "contains.text",
      "Fieldwire powers over 1,000,000 jobsites worldwide"
    );
    cy.get(".nav-item.sign-up").then(()=>{
        
    })

    cy.get(".terms.ng-scope")
  });
});
