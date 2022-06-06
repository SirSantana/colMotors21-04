describe('Navigation', ()=>{
    it('Login with email and password', ()=>{

        cy.visit('https://col-motors21-04.vercel.app/')

        // cy.get('a[href*="auth"]').click({multiple:true})
        cy.contains('Iniciar Sesion').click()
        cy.get('input').first().type('salazarmiguelito23@gmail.com')
        cy.get('input').last().type('123123')

        cy.get('button').contains('Iniciar Sesion').click()

    })
})