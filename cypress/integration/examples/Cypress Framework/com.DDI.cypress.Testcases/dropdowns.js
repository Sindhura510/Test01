describe('Controls Test', () => {
    
    it ('More Controls Test', () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.get("#firstName").type('Rizwan')
       cy.get("#lastName").type('Mohammed')
       cy.get("#userEmail").type('abc@gmail.com')
       cy.get("div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.practice-form-wrapper form:nth-child(2) div.mt-2.row:nth-child(3) div.col-md-9.col-sm-12 div.custom-control.custom-radio.custom-control-inline:nth-child(1) > label.custom-control-label").click()
       cy.get("#userNumber").type('8787878787')
       cy.get("#dateOfBirthInput").click()
       cy.get('.container > :nth-child(2) > :nth-child(3)').click()
       cy.get('.subjects-auto-complete__value-container').type('Computer Science{enter}')
       cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
      
       cy.get('#currentAddress').type('Santosh Nagar, Hyderabad.')
     
      cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').type('Haryana{enter}')
      cy.get('.css-1wa3eu0-placeholder').type('panipat{enter}')
       cy.get('#submit').click()
    })
})