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

  //XPATH ==>> (//td)[i] or //td[last()]
  it("7- Index", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("td").eq(5);
    cy.get("td").first();
    cy.get("td").last();
  });

  //XPATH ===>> //td[@id='td_id']   or //td(not(@id='td_id'))
  it("8- Filter", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    //.filter
    cy.get("td").filter("#td_id");
    //.not
    cy.get("td").not("#td_id");
  });

  it("9- Traversal", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    //closes parent closes to the element...it looks outside
    cy.get("#fname").closest("div").should("have.class", "main");
    //next sibling after the selected element
    cy.get("[value='td1_value']").next();
    //all siblings after the selected element
    cy.get("[value='td1_value']").nextAll();
    //all the simlings after selected element Until a spesific element
    cy.get("[value='td1_value']").nextUntil("[value='td4_value']");
    //fist previous element before the selected element
    cy.get("[value='td5_value']").prev();
    //All elements before selected element
    cy.get("[value='td5_value']").prevAll();
    //All elements previous the selected elment until a spesific element
    cy.get("[value='td5_value']").prevUntil("[value='td1_value']");
  });
});
