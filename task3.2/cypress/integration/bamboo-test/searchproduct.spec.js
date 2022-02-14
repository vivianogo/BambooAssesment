describe('To search for shoe in amazon site', () =>{
    beforeEach(()=>{
        
        //Launch Amazon US,
        cy.visit('https://www.amazon.com/')
    })
        
    it('can search for shoes',()=>{
        const searchAproduct = "shoe"

    // Get the search bar and type the name of the product
        cy.get('#twotabsearchtextbox')
        .type(`${searchAproduct}{enter}`)
        
    // Get the searched result listed  
        cy.get('[data-component-type="s-search-result"]')
        .should('have.length.gte', 1)
        
    //Get 
        cy.get('[data-component-type="s-search-result"]')
        .first().invoke('attr','data-asin')
        .then( val => console.log("111111111111111111", val))

        
        cy.get('[data-component-type="s-search-result"]')
        .first()
        .then( $div =>{
            const data_asin = $div.attr('data-asin');
            //Verifying the product you selected
            cy.get('[data-component-type="s-search-result"]')
            .first()
            .find('[data-component-type="s-product-image"] a')
            .click()
            .url().should('include', data_asin)

        })

    })


})

