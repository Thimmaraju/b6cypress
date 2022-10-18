class Loginpage{


    Loginwithcreds(username,password){

        cy.xpath(this.userNameInput()).type(username)

        cy.get(this.passwordInput()).type(password)
    
        cy.get(this.loginBtn()).click()
    }

    userNameInput(){

        return '//input[@placeholder="Username"]'
    }

    passwordInput(){

        return 'input[type="password"]'
    }

    loginBtn(){

        return 'button[type="submit"]'
    }

    LoginErrorMsg(){

        return "Invalid credentials"
    }

}

export default Loginpage;