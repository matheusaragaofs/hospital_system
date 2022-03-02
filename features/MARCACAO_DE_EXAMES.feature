Responsável: Lucas Leonardo
Feature: Marcação de Exames

Scenario: Identificação de usuários
Given: O usuário estaria cadastrado no banco de dados
When: O sistema tentar identificar ele
Then: Retornasse suas informações e uma tela para marcação ou listagem de exames

Scenario: Listagem de exames
Given: O paciente possui exames agendados
When: O sistema tentar listar eles
Then: Retornasse uma lista com todos os exames e um botão de cancelar ou editar

Scenario: Alteração a partir da listagem
Given: Eu exiba a listagem de exames de um paciente
When: O botão editar for clicado
Then: Abra a tela de alteração permitindo mudar o horário do agendamento

Scenario: Cancelamento a partir da listagem
Given: Eu exiba a listagem de exames de um paciente
When: O botão cancelar for clicado
Then: Abra uma tela solicitando a confirmação do cancelamento

Scenario: Marcação de exames
Given: O paciente existe
When: Eu vou marcar um exame
Then: Remove o horário da agenda do médico/especialidade e atribua o agendamento ao paciente

Scenario: Paciente não existe
Given: O usuário não estaria cadastrado no banco de dados
When: O sistema tentar identificar ele
Then: Retorne uma tela com um botão para redirecionamento ao cadastro do usuário
