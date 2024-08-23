//Teste H1
describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.getByData("principal").find("h1").should("contain", "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!")
  })
  })

//Teste H2
describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.getByData('2-titulo').contains('Vantagens do nosso banco:')
  })
})

//Teste H3
describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('3-titulo').contains('Conta e cartão gratuitos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('3-titulo2').contains('Saques sem custo')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('3-titulo3').contains('Programa de pontos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('3-titulo4').contains('Seguro Dispositivos')
  })
})

//Teste p
describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('p-1').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('p-2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('p-3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('p-4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

//Teste IMG
describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
it('Deve exibir a imagem correta!', () => {
  cy.getByData('img-1').should('be.visible')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
it('Deve exibir a imagem correta!', () => {
  cy.getByData('img-2').should('be.visible')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
it('Deve exibir a imagem correta!', () => {
  cy.getByData('img-3').should('be.visible')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
it('Deve exibir a imagem correta!', () => {
  cy.getByData('img-4').should('be.visible')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
it('Deve exibir a imagem correta!', () => {
  cy.getByData('img-5').should('be.visible')
  })
})