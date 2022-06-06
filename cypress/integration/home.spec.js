describe('Navigation',()=>{
    it('Should loaded home page', ()=>{

        cy.visit('https://col-motors21-04.vercel.app/')
        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="home"]').click({ multiple: true })
        cy.url().should('include', '/home')
    
        // // The new url should include "/about"
        // cy.get('a[href*="auth"]').click({ multiple: true })
  
        // cy.url().should('include', '/auth')
    
        // The new page should contain an h1 with "About page"
        cy.contains('Cotizaciones')
    })
})