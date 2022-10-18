///<reference types="cypress"/>

const availablefixtures = [
    {
        "name": "module1/register",
        "context": "1"
    },
    {
        "name": "register2",
        "context": "2"
    },
    {
        "name": "module1/register3",
        "context": "3"
    }
]

describe('Automation Test Suite - Fixtures', function () {
    //loop through both the fixtues 
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })

            it('Cypress Test Case - Understanding Fixtures', function () {
                //Calling
                cy.visit('https://shop.demoqa.com/my-account/');
                cy.get('#reg_username').type(this.data.Username);
                cy.get('#reg_email').type(this.data.Email);
                cy.get('#reg_password').type(this.data.weakPassword)

                //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior

                cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
                cy.get('.woocommerce-Button').should('be.disabled');

                // Clicking on to register on the Website by entering new password 

                cy.get('#reg_password').type(this.data.StrongPassword);
                cy.get('.woocommerce-Button').click();

                //Checking whether the Registration is successful and whether UserName is populated under login section
                cy.get('#username').should('have.value', this.data.Username);
            })
        })
    })
})


