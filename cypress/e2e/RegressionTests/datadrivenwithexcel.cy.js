///<reference types="cypress"/>

import user_data from "../../fixtures/user_data.json"

//var user_data =require('../../fixtures/user_data.json')

describe('Automation - Working With Data driven testing json', function () {

    user_data.forEach((data) =>{

        it('Cypress Test Case - Understanding Data driven testing json', function () {
  
            cy.visit('https://the-internet.herokuapp.com/login');
            
            cy.get('#username').type(data.username);
            cy.get('#password').type(data.password);
            cy.get('button[type="submit"]').click();

            
      
            
          })

    })
    
  })

  //cy.exec("node "cypress/e2e/convertXLSXtoJsonfile.js"")