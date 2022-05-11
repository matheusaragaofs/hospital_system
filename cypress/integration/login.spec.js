
describe("Testes de login", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/login");
    });
  
    it("Não é possivel tentar logar sem todos os campos preenchidos", () => {
        cy.get('[data-cy=login-btn]').should('be.disabled')
    });

    it("Botão de login possui texto 'Login'", () => {
        cy.get('[data-cy=login-btn]').contains("Login")
    });

    it("Login com dados válidos não gera mensagens de erro", () => {
        cy.get('[data-cy=email]').type("test@test.com");
        cy.get('[data-cy=password]').type("etset@123");
        cy.get('[data-cy=login-btn]').click();
        cy.get("[data-error]").should("not.exist");
      });
  });

