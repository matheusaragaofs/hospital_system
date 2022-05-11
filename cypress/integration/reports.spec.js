
describe("Testes da tela de relatórios médicos", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login");
        cy.get('[data-cy=email]').type("test@test.com");
        cy.get('[data-cy=password]').type("etset@123");
        cy.get('[data-cy=login-btn]').click();
        cy.get('[name="btn-reports"]').click();
    });
  
    afterEach(() => {
        cy.get('[data-cy=logout]').click({force: true});
        cy.wait(2000);
    });

    it("O botão de comparar não deve ser clicável sem que nenhum médico seja selecionado", () => {
        cy.get('[data-cy=compare-btn]').should('be.disabled');
    });

    it("O botão de gerar relatório não deve ser clicável sem que nenhum médico seja selecionado", () => {
        cy.get('[data-cy=report-btn]').should('be.disabled');
    });

    it("O botão de gerar reset não deve ser visível sem que nenhum médico seja selecionado", () => {
        cy.get('[data-cy=reset-btn]').should('not.exist');
    }); 

    it("O botão de comparar deve ser visível quando no mínimo um médico está selecionado", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('[data-cy=compare-btn]').should('exist');
    });

    it("O botão de gerar relatório deve ser visível quando no mínimo um médico está selecionado", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('[data-cy=report-btn]').should('exist');
    });

    it("O botão de gerar reset deve ser clicável visível no mínimo um médico está selecionado", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('[data-cy=reset-btn]').should('exist');
    }); 
    
    it("Os gráficos do primeiro médico devem ser exibidos ao selecionarmos o primeiro médico", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('.first-doctor-container').should('exist');
    }); 

    it("Ao clicar em comparar, uma nova opção de selecionar médico deve ser exibida", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('[data-cy=compare-btn]').click();
        cy.get('[data-cy=2nd-doctor]').should('exist');
    }); 
    
    it("Os gráficos do segundo médico devem ser exibidos ao selecionarmos o segundo médico", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('[data-cy=compare-btn]').click();
        cy.get('[data-cy=2nd-doctor]').click().get('mat-option').contains('Lucas').click();
        cy.get('.second-doctor-container').should('exist');
    }); 

    it("Os gráficos do segundo médico devem ser exibidos ao selecionarmos o segundo médico", () => {
        cy.get('[data-cy=1st-doctor]').click().get('mat-option').contains('Wesley').click();
        cy.get('[data-cy=compare-btn]').click();
        cy.get('[data-cy=2nd-doctor]').click().get('mat-option').contains('Lucas').click();
        cy.get('.second-doctor-container').should('exist');
    }); 

  });
