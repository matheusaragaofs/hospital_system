
describe("Testes da tela de pacientes", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login");
        cy.get("input[name=email]").type("lukita");
        cy.get("input[name=password]").type("111");
        cy.get('[name="login-btn"]').click();
        cy.get('[name="btn-patient"]').click();
    });
  
    it("Clicar em Novo paciente deve gerar a exibição de um modal", () => {
        cy.get('[name="btn-add-patient"]').click();
    });
  });