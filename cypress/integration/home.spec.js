
describe("Testes da tela inicial", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login");
        cy.get('[data-cy=email]').type("test@test.com");
        cy.get('[data-cy=password]').type("etset@123");
        cy.get('[data-cy=login-btn]').click();
    });

    afterEach(() => {
        cy.get('[data-cy=logout]').click({force: true});
        cy.wait(2000);
    });

    it("Clicar em Lista de pacientes não deve gerar erros", () => {
        cy.get('[name="btn-patient-list"]').click();
        cy.get("[data-error]").should("not.exist");
    });

    it("Clicar em Fila de espera não deve gerar erros", () => {
        cy.get('[name="btn-patient"]').click();
        cy.get("[data-error]").should("not.exist");
    });

    it("Clicar em Marcação de exames não deve gerar erros", () => {
        cy.get('[name="btn-exams"]').click();
        cy.get("[data-error]").should("not.exist");
    });

    it("Clicar em Relatórios médicos não deve gerar erros", () => {
        cy.get('[name="btn-reports"]').click();
        cy.get("[data-error]").should("not.exist");
    });
  });

