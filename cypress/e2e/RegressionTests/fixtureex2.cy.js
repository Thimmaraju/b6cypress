

describe('Understanding Fixtures - Cypress', function() {

    before(function () {
        cy.fixture('module1/register').then(function (data) {
          this.data = data;
        })
      })

    it('Validate Registration', function() {
      cy.visit('https://shop.demoqa.com/my-account/');

      //cy.get("#reg_username").type(this.data.Username)

      cy.enterText("#reg_username",this.data.Username)
      cy.wait(5000)
      //cy.get('#reg_email').type(this.data.Email);

      cy.enterText('#reg_email',this.data.Email)
      cy.wait(5000)

      cy.get('#reg_password').type(this.data.weakPassword)
      cy.wait(5000)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
     // cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');

      cy.validateAttribute('.woocommerce-Button',"disabled", "disabled")
      //or
     // cy.get('.woocommerce-Button').should('be.disabled');

      cy.elementTodisabled('.woocommerce-Button')
       cy.wait(5000)
      // Clicking on to register on the Website by entering new password 

      //cy.get('#reg_password').clear();

      cy.get('#reg_password').clear();

      cy.get('#reg_password').type(this.data.StrongPassword)
      cy.wait(10000)
      //cy.get('.woocommerce-Button').click();

      cy.clickonbutton('//button[@value="Register"]')
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', this.data.Username);

      //or

      //cy.get('#username').should('have.attr', 'value', this.data.Username);
      
      cy.validateAttribute('#username',"value",this.data.Username)
    })


  })