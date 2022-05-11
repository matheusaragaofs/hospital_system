Cenário 1: Gerar relatório para um médico cadastro
Given eu estou na tela "Dashboard de desempenho médico"
When eu seleciono o campo de "MÉDICO" com “Cristiano Ronaldo”
Then informações sobre o desempenho médico nesse periodo são exibidas

Cenário 2: Comparar o desempenho de dois médicos
Given eu estou na tela "Dashboard de desempenho médico"
When eu preencho o campo "MÉDICO 1" com Cristiano Ronaldo
And eu seleciono a opção de comparação
And eu preencho o campo "MÉDICO 2" com Neymar 
Then eu visualizo o relatório de ambos os médicos simultaneamente

Cenário 3: Exportar relatório gerado para um médico cadastrado
Given eu estou na tela "Dashboard de desempenho médico" após gerar as informações para um médico 
When eu exporto o relatório 
Then eu visualizo uma opção para baixar o arquivo do relatorio
And o download do arquivo é feito
And eu volto a visualizar o relatório de desempenho

Cenário 4: Visualizar com detalhes um gráfico
Given eu estou na tela "Dashboard de desempenho médico"
When eu preencho o campo "MÉDICO 1" com Cristiano Ronaldo
And eu visualizo o relatório do medico
And eu passo o mouse em cima do gráfico
Then eu visualizo informações detalhadas

