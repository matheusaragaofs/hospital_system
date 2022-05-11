
describe("Testes da tela de lista de pacientes", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login");
        cy.get('[data-cy=email]').type("test@test.com");
        cy.get('[data-cy=password]').type("etset@123");
        cy.get('[data-cy=login-btn]').click();
        cy.get('[name="btn-patient-list"]').click();
    });

    afterEach(() => {
        cy.get('[data-cy=logout]').click({force: true});
        cy.wait(2000);
    });

    it("Clicar em Novo paciente deve gerar a exibição de um modal", () => {
        cy.get('[name="btn-add-patient"]').click();
        cy.get('[name="create-patient-dialog"]');
    });

    it("Cadastrar um novo paciente corretamente não deve gerar erros", () => {
        cy.get('[name="btn-add-patient"]').click();
        cy.get("[data-cy=name]").type("El Bufalo Parraguez");
        cy.get("[data-cy=cpf]").type("13051905878");
        cy.get("[data-cy=phone_number]").type("81984258970");
        cy.get('mat-select').click().get('mat-option').contains('Masculino').click();
        cy.get("mat-datepicker-toggle").click();
        cy.get('button').contains('1').click();
        cy.get("[data-cy=address]").type("Rua Sport Club do Recife - Ilha do Retiro, Recife - PE");
        cy.get("[data-cy=cep]").type("50750560");
        cy.get('[name="btn-confirm"]').click();
        cy.get("[data-error]").should("not.exist");
    });


    it("Deletar um paciente deve fazer ele sumir da lista", () => {
        cy.get('[name="btn-add-patient"]').click();
        cy.get("[data-cy=name]").type("Joaozinho");
        cy.get("[data-cy=cpf]").type("14498235812");
        cy.get("[data-cy=phone_number]").type("81984258970");
        cy.get('mat-select').click().get('mat-option').contains('Masculino').click();
        cy.get("mat-datepicker-toggle").click();
        cy.get('button').contains('4').click();
        cy.get("[data-cy=address]").type("Rua Antonio Aureliano");
        cy.get("[data-cy=cep]").type("50730150");
        cy.get('[name="btn-confirm"]').click();   
        
        cy.get('[data-cy=acoes]').last().click({force: true}).as('actionsBtn');

        cy.get('@actionsBtn').should('be.visible');
        cy.get('@actionsBtn').click({ force: true });

        cy.get('[data-cy=delete]').last().click({force: true});

        cy.get('.footer-buttons > .mat-primary > .mat-button-wrapper').click();

        cy.get("[data-error]").should("not.exist");

    });

    it("Visualizar um paciende deve abrir um dialog box com as informações dele", () => {
        cy.get('[name="btn-add-patient"]').click();
        cy.get("[data-cy=name]").type("Weybson");
        cy.get("[data-cy=cpf]").type("18923648512");
        cy.get("[data-cy=phone_number]").type("8142582369");
        cy.get('mat-select').click().get('mat-option').contains('Masculino').click();
        cy.get("mat-datepicker-toggle").click();
        cy.get('button').contains('4').click();
        cy.get("[data-cy=address]").type("Rua Antonio Aureliano");
        cy.get("[data-cy=cep]").type("50730150");
        cy.get('[name="btn-confirm"]').click();   
        
        cy.get('[data-cy=acoes]').last().click({force: true}).as('actionsBtn');

        cy.get('@actionsBtn').should('be.visible');
        cy.get('@actionsBtn').click({ force: true });

        cy.get('[data-cy=view]').last().click({force: true});

        cy.get('#mat-dialog-1').should('be.visible');

    });


  });
