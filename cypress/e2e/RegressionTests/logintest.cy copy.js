describe('Validate Login Functionality', () => {

  beforeEach(function () {

    //cy.viewport("ipad-2", "landscape")
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  })

  it('Validate Login with Valid Credentials', () => {

    cy.login("Admin","admin123")

    cy.ContainSTextvisible("Employee Information")

    //cy.contains("Employee Information").should("be.visible");
    //or

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

    //or

    cy.location().its("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

  })

  it('Validate Login with Invalid Password', () => {

    cy.login("Admin", "bwedhbqwiudhqwiuhdf")

    cy.contains("Invalid credentials").should("be.visible")

  })

})


  //Describe it - Mocha Framework

  // Describe - Test suite - collection of test cases

  //it block - Test case

  //cypress - Hooks 