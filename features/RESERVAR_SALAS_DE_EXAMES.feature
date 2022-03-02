Responsável: Tomás Nascimento
Feature: Reservar salas de exames (checar e evitar conflito de reserva)

GUI 1:
Cenário: Selecionar um dia e um horário para marcar um exame específico
Given Estou na tela de salas disponíveis para marcação do exame de "Radiografia" para o paciente "Adalberto"
When Eu seleciono um dia e um horário específicos
Then As disponibilidades das salas começam a ser preenchidas para a data e o horário selecionados
And Caso exista uma sala disponível para marcar um exame
When Eu clico na opção de colocar o paciente "Adalberto" na fila daquela sala no dia e horário especificado
Then Eu prossigo para o próximo cenário
And O sistema muda de página
And Caso não exista uma sala disponível para marcar um exame
When Eu devo informar ao paciente a indisponibilidade e refazer os passos da marcação do exame
Then O paciente "Adalberto" não entrou na fila de nenhuma sala
And O sistema permanece na mesma página

GUI 2:
Cenário: Confirmar ou Cancelar a entrada do paciente na fila de exames
Given Estou na tela das informações do seu Adalberto com os botões de "Cancelar" ou "Entrar na Fila"
When Eu seleciono o botão "Cancelar"
Then O sistema retorna para o cenário anterior
And O paciente "Adalberto" não entra na fila do exame nos dia, sala e horário especificados
When eu seleciono o botão "Confirmar"
Then Eu prossigo para o próximo cenário
And O sistema muda de página

GUI 3:
Cenário: Receber a resposta do sistema se o paciente conseguiu entrar na fila com sucesso
Given Estou na tela com as informações do paciente "Adalberto" com um popup aberto por cima dessas informações
When Eu leio que o paciente "Adalberto" conseguiu ingressar na fila do exame com sucesso
Then O sistema muda para o próximo cenário
And Eu não estou mais na mesma página
When Eu leio que o paciente "Adalberto" não conseguiu ingressar na fila de exames
Then O sistema teve algum erro que fez o paciente "Adalberto" não conseguir ser inserido na fila de exames
And O sistema permence na mesma página aguardando que eu feche o popup

GUI 4:
Cenário: Receber a confirmação ou a negação do exame para um paciente específico
Given Estou na tela com as informações do paciente "Adalberto" com um popup aberto por cima dessas informações
When Eu leio que o paciente "Adalberto" conseguiu marcar o exame com sucesso
Then O sistema reserva a sala do exame especificado para seu "Adalberto" no dia e na data especificados
And Fecha a fila para aquela sala assim como rejeita os demais pacientes que estavam concorrendo com "Adalberto"
And A tela do sistema volta para o cenário de marcação de exames
When Eu leio que o paciente "Adalberto" não conseguiu marcar o exame na data e no horário especificados
Then O sistema retira o paciente "Adalberto" da fila
And A tela do sistema volta para o cenário de marcação de exames com o paciente "Adalberto"
