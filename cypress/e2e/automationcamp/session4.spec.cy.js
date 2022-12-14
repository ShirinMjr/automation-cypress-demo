/// <refrence type ='cypress' />

describe("Session4", function () {
  /**
   * If there is a JS command in the middle of the test script
   * it wouldn't wait for it, it runs it right away
   */
  it("1-What is async code?", function () {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#js-link-box-en").click();
    cy.url().should("contain", "Main_Page");
    cy.wait(3000);
    console.log("Test is finished"); // Will execute First!
  });

  /**
   * cy.get(SELECTOR).then((VAR) => FUNCTION()); //Callback function
   * cy.get(SELECTOR).then((VAR) => {CODE BLOCK});
   * we can store the result of one function (VAR) and use it in another function
   */
  it("2- What is .then()?", function () {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#js-link-box-en").click();
    cy.url().should("contain", "Main_Page");
    cy.wait(3000).then(() => {
      console.log("Test is finished");
    });
  });

  it("3- Assert text of input using then()", function () {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("#fname")
      .type("Cypress")
      .then((el) => {
        let input_value = el.val();
        expect(input_value).to.eq("Cypress");
      });
  });

  it.only("4- Api assertion using then()", function () {
    fetch("https://api.spacexdata.com/v3/missions")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  });
});
