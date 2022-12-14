/// <refrence type ='cypress' />

describe("Session4", function () {
  it("1-What is async code?", function () {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#js-link-box-en").click();
    cy.url().should("contain", "Main_Page");
    cy.wait(3000);
    console.log("Test is finished"); // Will execute First!
  });
  it("2- What is .then()?", function () {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#js-link-box-en").click();
    cy.url().should("contain", "Main_Page");
    cy.wait(3000).then((a) => {
      console.log("Test is finished");
    });
  });
});
