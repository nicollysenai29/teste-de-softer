describe('Formulário de login', () => { // contexto do nosso teste
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        // antes de qualquer teste, é necessário visitar o site da aplicação. Por isto, utilizamos o hook beforeEach
        // PS: NUNCA altere as portas
    })

    it('Não deve permitir um e-mail inválido!', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
        
        /* clicamos no botão login e inserimos os dados de login para testar o cenário triste, onde o email está inválido */
    })

    it.only('Não deve permitir um campo em branco', () => {

        cy.getByData('botao-login').click()
                
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório') 
})
})