Responsável: Lucas Leonardo
Feature: Marcação de Exames

Scenario: Identificação de pacientes
Given: O usuário estaria cadastrado no banco de dados
When: O sistema tentar identificar ele
Then: Retornasse suas informações e uma tela para marcação ou listagem de exames

Scenario: Listagem de exames
Given: O paciente possui exames agendados
When: O sistema tentar listar eles
Then: Retornasse uma lista com todos os exames e um botão de cancelar ou editar

Scenario: Filtro na listagem de exames
Given: O paciente possui exames agendados de diferentes especialidades
When: Um filtro dentre os exibidos for escolhido na listagem
Then: Retorne uma lista com os agendamentos daquela mesma especialidade

Scenario: Alteração a partir da listagem
Given: O sistema exiba a listagem de exames de um paciente
When: O botão editar for clicado
Then: Abra a tela de alteração permitindo mudar o horário do agendamento

Scenario: Cancelamento a partir da listagem
Given: O sistema exiba a listagem de exames de um paciente
When: O botão cancelar for clicado
Then: Abra uma tela solicitando a confirmação do cancelamento

Scenario: Marcação de exames
Given: O paciente existe
When: Eu vou marcar um exame
Then: Remove o horário da agenda do médico/especialidade e atribua o agendamento ao paciente

Scenario: Paciente não existe
Given: O usuário não estaria cadastrado no banco de dados
When: O sistema tentar identificar ele
Then: Retorne uma mensagem informando que o paciente ainda não está cadastrado no sistema
And: Dê a opção de efetuar o cadastro do paciente

Scenario: Marcação em agenda indisponível
Given: O paciente existe
When: Uma agenda indisponível for escolhida
Then: Retorne uma mensagem informando a indisponibilidade
And: Sugira que escolha uma nova agenda dentre as disponíveis

Scenario: Listagem de exames vazia
Given: O paciente não possui exames agendados
When: O sistema tenta listar eles
Then: Retorne uma mensagem informando que o paciente ainda não possui exames agendados.
