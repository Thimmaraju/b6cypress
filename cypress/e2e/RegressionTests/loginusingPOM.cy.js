import Loginpage from "../../PageObjects/ClientPO/lgoinPage.po"

import Employeelist from "../../PageObjects/ClientPO/employeelist.po"

import data from "../../fixtures/logincreds.json"

const  login = new Loginpage()

//const emplist = new Employeelist()

describe('Validate Login Functionality', () => {



  beforeEach(function () {

    //cy.viewport("ipad-2", "landscape")
    cy.visit(Cypress.env("cleienturl"));

  })

  it('Validate Login with Valid Credentials', () => {

    login.Loginwithcreds(data.Username, data.Password)

    cy.contains(Employeelist.employeeInformationHeadertext()).should("be.visible");
    //or

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

    //or

    cy.location().its("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

  })

  it('Validate Login with Invalid Password', () => {

   login.Loginwithcreds(data.Username, data.WrongPassword)

    cy.contains(login.LoginErrorMsg()).should("be.visible")

  })

})


  //Describe it - Mocha Framework

  // Describe - Test suite - collection of test cases

  //it block - Test case

  //cypress - Hooks 