
describe("Testes da tela de lista de pacientes", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login");
        cy.get("input[name=email]").type("lukita");
        cy.get("input[name=password]").type("111");
        cy.get('[name="login-btn"]').click();
        cy.get('[name="btn-patient-list"]').click();
    });
  
    it("Clicar em Novo paciente deve gerar a exibição de um modal", () => {
        cy.get('[name="btn-add-patient"]').click();
        cy.get('[name="create-patient-dialog"]');
    });

    it("Cadastrar um novo paciente corretamente não deve gerar erros", () => {
        cy.get('[name="btn-add-patient"]').click();
        cy.get("input[name=name]").type("El Bufalo Parraguez");
        cy.get("input[name=cpf]").type("13051905878");
        cy.get("input[name=phone_number]").type("81984258970");
        cy.get('mat-select').click().get('mat-option').contains('Masculino').click();

    });

  });
