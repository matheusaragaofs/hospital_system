Responsável: Tomás Nascimento
Feature: Reservar salas de exames (checar e evitar conflito de reserva)

GUI 1:
Cenário: Selecionar um dia e um horário para marcar um exame específico
Given Estou na tela de salas disponíveis para marcação do exame de "Radiografia" para o paciente "Adalberto"
When Eu seleciono um dia e um horário específicos
Then As disponibilidades das salas começam a ser preenchidas para a data e o horário selecionados
And Caso exista uma sala disponível para marcar um exame
When Eu clico na opção de colocar o paciente "Adalberto" na fila daquela sala no dia e horário especificado
Then Eu prossigo para o próximo cenário após 10 segundos
And O sistema muda de página
And Caso não exista uma sala disponível para marcar um exame
Then O paciente "Adalberto" não entrou na fila de nenhuma sala
And O sistema permanece na mesma página esperando por uma nova ação de minha parte

GUI 2:
Cenário: Confirmar ou Cancelar a entrada do paciente na fila de exames
Given Estou na tela das informações do paciente "Adalberto" com os botões de "Cancelar" ou "Entrar na Fila"
When Eu seleciono o botão "Cancelar"
Then O sistema retorna para o cenário anterior
And O paciente "Adalberto" não entra na fila do exame nos dia, sala e horário especificados
When eu seleciono o botão "Confirmar"
Then Eu prossigo para o próximo cenário após 10 segundos
And O sistema muda de página

GUI 3:
Cenário: Receber a resposta do sistema se o paciente conseguiu entrar na fila com sucesso
Given Estou na tela com as informações do paciente "Adalberto" com um popup aberto por cima dessas informações
When Eu fecho o popup
Then O sistema muda para o próximo cenário após 10 segundos

Cenário: Receber o erro de que o paciente não conseguiu adentrar na fila
Given Estou na tela de informações do paciente "Adalberto" com um popup informando que ele não conseguiu entrar na fila
When Eu fecho o popup
Then O sistema retorna para a página inicial de consultas após 10 segundos
And Ainda estão selecionados o mesmo paciente, mesmo exame, mesmo dia e mesmo horários preenchidos
And Eu observo que a sala em que havia tentado inserir o paciente "Alberto" consta como confirmada para um paciente diferente

GUI 4:
Cenário: Receber a confirmação do exame para um paciente específico
Given Estou na tela com as informações do paciente "Adalberto" com um popup aberto por cima dessas informações
When Eu leio que o paciente "Adalberto" conseguiu marcar o exame com sucesso
Then O sistema reserva a sala do exame especificado para seu "Adalberto" no dia e na data especificados
And Fecha a fila para aquela sala assim como rejeita os demais pacientes que estavam concorrendo com "Adalberto"
And O sistema permanece na mesma página com o popup ainda aberto
When Eu clico para fechar o popup
Then O sistema retorna para a sala de marcação de exames após 10 segundos
And A tela do sistema volta para o cenário de marcação de exames com a sala previamente selecionada constando como
"Confirmada" e com o paciente "Adalberto" constando como o paciente dessa sala 

Cenário: Receber a informação de que o paciente não conseguiu marcar o exame com êxito
Given estou na tela com as informações do paciente "Adalberto" com um popup informando que ele não conseguiu
ter seu exame marcado no dia,sala e horário especificados
When eu fecho o popup
Then O sistema retorna para a página inicial de marcação de consultas após 10 segundos e remove Adalberto da fila
And Ainda estão selecionados o mesmo paciente, mesmo exame, mesmo dia e mesmo horários preenchidos
And Eu observo que a sala em que havia tentado inserir o paciente "Alberto" consta como confirmada para um paciente diferente
Then O paciente "Alberto" ainda não tem um horário reservado para o exame solicitado
