
describe("Learning Hooks", () => {


    before(function () {

      cy.log("before All");

      });


    after(function () {
      cy.log( "after All" );
    });


    beforeEach(function () {
      cy.log("before each" );
    });


    afterEach(function () {
      cy.log("after each" );
    });


    it("should visit the page", () => {
      cy.log("1st IT block");
      //cy.visit("https://www.google.com/");
    });

    specify("dummy block 1", () => {
      cy.log("2nd IT block");
    });

    it.skip("dummy block 2", () => {
        cy.log("2nd IT block");
      });
  });



  // it.only
  //it.skip 

  //describe == context

  //it == Specify 