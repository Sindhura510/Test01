describe ('MY First Test Suite',function()
{
    before(function(){

        cy.fixture('example').then(function(data)
        {
               this.data=data
        })
        
    })
    it('validating the login credentials',function(){

        cy.visit('https://phptravels.com/')
        cy.wait(10000)
       // cy.get('.lvl-0 sign-in btn btn-md btn-white-outline').invoke('removeAttr','target').click()
        cy.get('.sign-in').invoke('removeAttr','target').click()
        cy.url().should('include','https://phptravels.org/clientarea.php')
        cy.get('#inputEmail').type(this.data.email)
        cy.get('#inputPassword').type(this.data.pwd)
        cy.get('input[type="checkbox"]').click().should('be.checked')
    })
})
