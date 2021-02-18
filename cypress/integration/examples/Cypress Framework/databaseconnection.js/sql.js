context('window',() =>{

    it('validating Datainteractions', ()=> {
        const dbName = 'world'
        const query = 'SELECT * FROM city'

           cy.task('queryDatabase', { dbName, query })

        

         
             //console.log(result[0][1])
//
         })
    
    })

