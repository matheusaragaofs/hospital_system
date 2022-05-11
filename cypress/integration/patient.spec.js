
describe("Testes da tela de pacientes", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login");
        cy.get('[data-cy=email]').type("test@test.com");
        cy.get('[data-cy=password]').type("etset@123");
        cy.get('[data-cy=login-btn]').click();
        cy.get('[name="btn-patient"]').click();
    });
  
    afterEach(() => {
        cy.get('[data-cy=logout]').click({force: true});
        cy.wait(2000);
    });

    it("Clicar em Registrar deve gerar a exibição de um modal", () => {
        cy.get('.register-btn').click();
        cy.get('#mat-dialog-0').should('be.visible');
    });

    it("Registrar um CPF não cadastrado deveria retornar um erro", () => {
        cy.get('.register-btn').click();
        cy.get("[data-cy=cpf]").type("999999999999");
        cy.get('.ng-untouched > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('#mat-error-3').should('exist');
    });

    it("Tentar registrar um CPF cadastrado nao deveria retornar um erro", () => {
        cy.get('.register-btn').click();
        cy.get("[data-cy=cpf]").type("13051905878");
        cy.get('.ng-untouched > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('#mat-error-3').should('not.exist');
    });


    it("Registrar um CPF cadastrado deve adiciona-lo na lista de espera", () => {

        cy.get('[name="btn-patient-list"]').click();
        cy.get('[name="btn-add-patient"]').click();
        cy.get("[data-cy=name]").type("Rafael Thyere");
        cy.get("[data-cy=cpf]").type("44487687612");
        cy.get("[data-cy=phone_number]").type("81984258970");
        cy.get('mat-select').click().get('mat-option').contains('Masculino').click();
        cy.get("mat-datepicker-toggle").click();
        cy.get('button').contains('1').click();
        cy.get("[data-cy=address]").type("Rua Sport Club do Recife - Ilha do Retiro, Recife - PE");
        cy.get("[data-cy=cep").type("50750560");
        cy.get('[name="btn-confirm"]').click();
        cy.get('body').click(0,0)

        cy.get('[name="btn-patient"]').click({force:true});

        cy.get('.register-btn').click({force:true});
        cy.get("[data-cy=cpf]").type("44487687612");
        cy.get('.ng-untouched > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('mat-select').click().get('mat-option').contains('Alta').click();
        cy.get('.footer-buttons > .mat-primary').click();
    });

    it("Definir o paciente como atendido deve o blindar de interações", () => {
        cy.get('mat-slide-toggle').first().click();
    });

    it("Pesquisar por um CPF deve exibir somente dados deles", () => {
        cy.get('[data-cy=search-cpf]').type("44487687612");
        cy.get('.mat-form-field-suffix > :nth-child(1) > .mat-button-wrapper > .mat-icon').click();
        cy.contains('444.876.876-12').should('exist');
    });

  });
