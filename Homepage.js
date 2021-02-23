class Homepage{

    getEditbox(){
        return cy.get(':nth-child(1) > .form-control')
       
    }

    getTwoWayDatabinding(){
        return  cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
        return cy.get('select')
    }
    getStudent(){
       return  cy.get('#inlineRadio1')
    }
    getShopbutton(){
        return cy.get(':nth-child(2) > .nav-link')

    }
    getcheckbox(){
        return cy.get('#exampleCheck1')
    }
    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }
    getBlackBerryproduct(){
        return cy.get(':nth-child(4) > .card > .card-footer > .btn')
    }
    getcheckout(){
        return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    gettheproducttoberemoved(){
       return cy.get(':nth-child(1) > :nth-child(5) > .btn')
    } 
    gettocheckoutinthepage(){
         return cy.get(':nth-child(5) > .btn')
    }
    getcountrydetais(){
        return cy.get('#country')
    }
    gettoacceptterms(){
         return cy.get('.checkbox > label')
    }
    getPurchase(){
       return cy.get('.ng-untouched > .btn')
    }
    getclosebuttoninAlert(){

       return cy.get('.nsm-dialog-animation-fade > .btn')
    }

}
export default Homepage;