/// <refrence type ='cypress' />

describe("Suite 2 ", () => {
  it("'1- Basic Syntax' ", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    //cy.gey(CSS SELECTOR)
    cy.get("#fname").type("Shirin");
    cy.get("#lname").type("M");
  });

  it("2- Auto Scroll", () => {
    cy.visit("https://datatables.net/examples/basic_init/scroll_x.html");
    cy.get(":nth-child(9) > :nth-child(9)").click();
  });

  it("3- Contains", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    //cy.contaions(TEXT)
    cy.contains("This is your form title:");
    //both of these are doing the same thing
    cy.contains("label[for='moption']", "Option 2");
    cy.get("label[for='moption']").contains("Option 2");
  });

  it.only("4- Relatives", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    //Chidlren
    cy.get("#owc").children();
    cy.get("#owc").children("[value='option 2']").click();
    //Parent
    cy.contains("Singer").parent();
    cy.get("#owc")
      .children("[value='option 2']")
      .siblings()
      .should("have.length", 3);
  });
});
>>>>>>> 2d66a8c77b6fe64b31fa089567aad18c34ae4b2c
