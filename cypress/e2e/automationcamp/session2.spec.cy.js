/// <refrence type ='cypress' />

describe("Suite 2 ", () => {
  it("'1- Basic Syntax' ", () => {
    //=====> cy.gey(CSS SELECTOR)
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("#fname").type("Shirin");
    cy.get("#lname").type("M");
  });

  it("2- Auto Scroll", () => {
    cy.visit("https://datatables.net/examples/basic_init/scroll_x.html");
    cy.get(":nth-child(9) > :nth-child(9)").click();
  });

  //=====> cy.contaions(TEXT)
  it("3- Contains", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.contains("This is your form title:");
    //both of these are doing the same thing
    cy.contains("label[for='moption']", "Option 2");
    cy.get("label[for='moption']").contains("Option 2");
  });

  it("4- Relatives", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    //.chidlren
    cy.get("#owc").children();
    cy.get("#owc").children("[value='option 2']").click();
    //.parent
    cy.contains("Singer").parent();
    cy.get("#owc")
      .children("[value='option 2']")
      .siblings()
      .should("have.length", 3);
  });

  //.parents .parentsUntil
  it("5- Ancestors", () => {
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
    cy.get("div#mp-welcome").parents();
    //XPATH =>> //*[@id='mp-welcome']/ancestors::
    cy.get("div#mp-welcome").parents("div#mw-content-text");
    cy.get("div#mp-welcome").parentsUntil("#bodyContent");
  });

  /**
   * cy.get(SELECTOR).find(SELECTOR) find is only a chainable command
   * .within(() => {  //within is a function by itselfe
   * }) limists actions only to elements within originally selected element
   */
  it.only("6- Descendants", () => {
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
    cy.get("#bodyContent").find("div#mw-content-text");
    cy.get("#bodyContent").within(() => {
      cy.get("div#mw-content-text");
    });
  });
});
