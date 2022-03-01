GUI Scenario 1: Tentar gerar relatório para médico não cadastrado
Given eu estou na tela "Dashboard de desempenho médico"
When eu preencho o campo de "MÉDICO" com um nome não cadastrado no sistema
And eu seleciono '24/10/21' e '31/12/21' como intervalo de tempo 
Then eu visualizo uma mensagem de erro dizendo "Médico não encontrado no sistema"

Cenário 2: Tentar gerar relatório para período de tempo sem informações disponível para o médico selecionado
Given eu estou na tela "Dashboard de desempenho médico"
And o médico Cristiano Ronaldo trabalha no hospital desde o dia 14/02/2022
When eu preencho o campo de "MÉDICO" com “Cristiano Ronaldo”
And eu seleciono como intervalo de tempo “01/01/2021” e “31/12/2021”
Then eu visualizo uma mensagem de erro dizendo "Não existem informações nessa faixa de tempo"

Cenário 3: Gerar relatório para um médico cadastro e no tempo disponível
Given eu estou na tela "Dashboard de desempenho médico"
And o médico Cristiano Ronaldo trabalha no hospital desde o dia 01/02/2019
When eu preencho o campo de "MÉDICO" com “Cristiano Ronaldo”
And eu seleciono como intervalo de tempo “01/01/2021” e “31/12/2021”
Then informações sobre o desempenho médico nesse periodo são exibidas

Cenário 4: Atualizar as informações exibidas com os dados mais atuais
Given eu estou na tela "Dashboard de desempenho médico" após gerar as informações para um médico 
When eu atualizo as informações
Then eu visualizo uma mensagem informando que as informações estão sendo atualizadas
And eu volto a visualizar o relatório de desempenho

Cenário 5: Exportar relatório gerado para um médico cadastrado
Given eu estou na tela "Dashboard de desempenho médico" após gerar as informações para um médico 
When eu exporto o relatório 
Then eu visualizo uma mensagem inforamndo que o relatório está sendo exportado
And o download do arquivo é feito
And eu volto a visualizar o relatório de desempenho

Cenário 6: Comparar o desempenho de dois médicos
Given eu estou na tela "Dashboard de desempenho médico"
And o médico Cristiano Ronaldo trabalha no hospital desde o dia 29/08/2020
And o médico Neymar trabalha no hospital desde o dia 14/02/2020
When eu seleciono a opção de comparação
And eu preencho o campo "MÉDICO 1" com Cristiano Ronaldo
And eu preencho o campo "MÉDICO 2" com Neymar 
And eu seleciono como intervalo de tempo “01/01/2021” e “31/12/2021”
Then eu visualizo o relatório de ambos os médicos simultaneamente
