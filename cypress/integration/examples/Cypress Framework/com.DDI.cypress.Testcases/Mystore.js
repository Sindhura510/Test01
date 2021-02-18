describe ('MY First Test Suite',function()
{
    before(function(){

        cy.fixture('example').then(function(data)
        {
               this.data=data
        })


    })

        it('Validating the Search box',function(){

            cy.visit('http://automationpractice.com/index.php')

            cy.get('#search_query_top').type(this.data.Product)
            Cypress.config('defaultCommandTimeout:10000')
            //cy.config('pageLoadTimeout: 30000')
            cy.get('#search_query_top').should ('be.visible')
            
             // => {defaultCommandTimeout: 10000, pageLoadTimeout: 30000, ...}
            // cy.get('.ac_results').invoke('show')
            // cy.get('ac_even').contains('Casual Dresses > Printed Dress').click()
            cy.get('#searchbox > .btn').click()
            cy.get(':nth-child(1) > .product-container > .right-block > h5 > .product-name').click().should('have.length','1')


    })
         it('Validating the AddTO Cart button',function(){
           cy.get('#quantity_wanted').clear().type('2')
         //  cy.get('.exclusive > span').click().should('have.value','There are 2 items in your cart')
           cy.get('#add_to_cart > .exclusive').click()
           cy.get('.layer_cart_cart').should('be.visible')

        })

})