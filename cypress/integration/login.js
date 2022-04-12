//const { describe } = require("mocha");

//const cypress = require("cypress")
//const { it } = require("mocha")

describe('login',()=>{
    it('login page',()=>{
        cy.visit('https://dev.mm100.mastermindtms.com/')
        //cy.wait(5000)
        cy.get('#social-mastermind').click()
        cy.wait(5000)
    

        cy.get('#menu-button--menu--3').click()
        cy.get('[data-testid="nav-link-add-carrier"]').click()
        cy.get('[name="name"]').type('Regression Carrier 08132020')
        cy.get('[name="code"]').type('RC/08132020')

    })
})