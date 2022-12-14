/// <refrence type ='cypress' />

describe("Suite 2 ", () => {
  it("'1- Basic Syntax' ", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("#fname").type("Shirin");
  });

  it("2- ", () => {});
});
