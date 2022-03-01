Responsável: Matheus Aragão
Feature: Cadastrar pacientes em fila de espera

GUI 1
Cenário: Cadastrar paciente na fila de espera
Given Estou no formulário de cadastro de pacientes”
When Preencho os campos “CPF” “Nome” e seleciono a “Prioridade”: Baixa.
Then  O paciente é cadastrado e a lista é atualizada
And Consigo visualizar na listagem de pacientes com os campos  CPF e Nome preenchidos e sua prioridade setada como Baixa em cor verde
And mensagem cadastro realizado com sucesso é exibida

GUI  2
Cenário: Filtrar pacientes por prioridade
Given Estou na página de listagem de pacientes”
When Clico na bolinha amarela do filtro de prioridades.
Then  A lista é atualizada e mostra apenas os pacientes que possuem a prioridade “Média”.

GUI  3
Cenário: Alterar a prioridade de um paciente
Given Tenho 3 pacientes com prioridade baixa, “Jorge”, “David” e ‘Ramon”.
When Altero a prioridade de Jorge pra “Alta”.
Then  A lista é atualizada “Jorge” sobe pro topo da lista, ficando na frente de “David” e “Ramon”.
And mensagem de alteração realizada com sucesso é exibida

GUI  4
Cenário: Alterar o status de “não atendido” para “atendido” de um paciente
Given Tenho pacientes “Jorge” “David” e “Ramon” e todos estão com com status (switch)  de cor vermelha.
When Clico no status (switch) de “Jorge”.
Then  A lista é atualizada “Jorge” desce pro fim da listagem.
And O seu status (switch) é alterado pra atendido ficando verde
And O paciente fica com background-color cinza.

Questão 5 (2 cenários de falha)

GUI 5  
Cenário: Falha ao cadastrar um paciente com CPF inválido
Given Estou no formulário de cadastro de pacientes”
When Preencho os campos “CPF” “Nome” e seleciono a “Prioridade”: Baixa e clico em criar.
Then O paciente não é cadastrado na lista de espera.;
And  Aparece uma mensagem de erro dizendo que o CPF é inválido

GUI 6 
Cenário: Cadastar paciente sem escolher a prioridade
Given Estou no formulário de cadastro de pacientes”
When Preencho os campos “CPF” “Nome” e não seleciono a “Prioridade"
Then O paciente não é cadastrado na lista de espera.
And  Aparece uma mensagem de erro dizendo que o campo prioridade não foi selecionado.
_______________________________________________________

Questão 7 - D 

GUI 8
Cenário: Cadastrar pacientes com os campos obrigatórios vazio
Given Estou no formulário de cadastro de pacientes”
When Clico em cadastrar sem preencher os campos obrigatórios
Then Aparece uma mensagem de erro, dizendo que há campos em branco.
