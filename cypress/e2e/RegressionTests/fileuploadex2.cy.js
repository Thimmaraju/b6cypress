///<reference types="cypress"/>

describe('Automation - File Upload Example - 2', function () {

    it.only('Cypress Test Case - Understanding upload file - 2', function () {
  
      cy.visit('https://the-internet.herokuapp.com/upload');

      cy.get('#file-upload').attachFile('animated-GIF-8.gif');
      //cy.fileupload("#file-upload",'module1/test1.txt')
      cy.get('#file-submit').click();

      cy.get('#uploaded-files').contains('animated-GIF-8.gif')
    
    })

    // Import 

    it.only('Cypress Test Case - Understanding Download file', function () {
  
        cy.downloadFile("https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fA%3D%3D&w=1000&q=80", "cypress/Downloadefiles" , "parrot.jpg" )
        cy.readFile('cypress/Downloadefiles/parrot.jpg').should('exist')
      
      })

      // Export 

  })