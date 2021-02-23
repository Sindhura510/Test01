/// <reference types="cypress" />
import Homepage from '../Cypress Framework/com.DDI.cypress.Testcases/pageobjectmodel/Homepage'
describe ('MY First Test Suite',function()
{
    before(function(){

        cy.fixture('example').then(function(data)
        {
               this.data=data
        })


    })

        it('Testing login credentials',function(){
            const homepage=new Homepage()
            cy.visit("https://rahulshettyacademy.com/angularpractice/")
            homepage.getEditbox().type(this.data.name)
        
            homepage.getcheckbox().check().should('be.checked')
            homepage.getGender().select(this.data.gender)
            homepage.getStudent().check()
            homepage.getTwoWayDatabinding().should('have.value',this.data.name)
            homepage.getEditbox().should('have.attr','minlength','2')
            homepage.getEntrepreneur().should('be.disabled')
            homepage.getShopbutton().click()
        
            homepage.getBlackBerryproduct().click()
            homepage. getcheckout().click()
            homepage.gettheproducttoberemoved().click()
            homepage.gettocheckoutinthepage().click()
            homepage.getcountrydetais().type('India{enter}').should('have.value','India')
            homepage.getPurchase().click()
            cy.on('window:alert',(txt)=>{
                //Mocha assertions
                expect(txt).to.contains('Success! Thank you! Your order will be delivered in next few weeks :-).');
             })
             cy.go('back')
           
        })


    })
