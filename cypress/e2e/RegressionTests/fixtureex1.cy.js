import register from "../../fixtures/register2.json"

describe('Understanding Fixtures - Cypress', () => {


    it('Validate Registration', () => {
      cy.visit('https://shop.demoqa.com/my-account/');

      let user = register.Username +Math.random().toString(36).slice(2, 7);

      cy.log(user)
      cy.writeFile('cypress/fixtures/module3/test4.json', { username: user});

      cy.get("#reg_username").type(user)

      cy.wait(5000)
      cy.get('#reg_email').type(register.Email);
      cy.wait(5000)
      cy.get('#reg_password').type(register.weakPassword)
      cy.wait(5000)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
      //or
      cy.get('.woocommerce-Button').should('be.disabled');
       cy.wait(5000)
      // Clicking on to register on the Website by entering new password 

      //cy.get('#reg_password').clear();

      cy.get('#reg_password').clear();

      cy.get('#reg_password').type(register.StrongPassword)
      cy.wait(10000)
      cy.get('.woocommerce-Button').click();
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', register.Username);

      //or

      cy.get('#username').should('have.attr', 'value', register.Username);

    })


  })