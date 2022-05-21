describe('Navigation', ()=>{
    beforeEach(()=>{
        cy.visit('https://col-motors21-04.vercel.app/')

        cy.contains('Iniciar Sesion').click()
        cy.get('input').first().type('salazarmiguelito23@gmail.com')
        cy.get('input').last().type('123123')

        cy.get('button').contains('Iniciar Sesion').click()
    })
    it('Create a new Cotizacion', ()=>{
        
        cy.get('[name="referencia"]').type('Esto es una prueba de test')
        cy.get('[name="repuesto"]').type('Esto es una prueba de test de repuestos')
        cy.contains('Elige la marca de auto').click()

    })
})