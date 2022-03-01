Scenario Autenticação processada com sucesso
Given É um usuário cadastrado no sistema e com todas as informações corretas
When Colocar seus dados nos campos corretos, sem nenhum erro de escrita
Then O usuário é liberado para acessar a plataforma com todos os seus dados e funcionalidades disponíveis.

	Scenario Autenticação processada com erro devido a senha incorreta
Given É um usuário cadastrado no sistema e com todas as informações corretas
When Colocar seus dados nos campos corretos, porém, preenche a senha incorretamente
Then O usuário recebe uma mensagem de erro na tela de login informando que o login ou a senha estão incorretos

Scenario Autenticação processada com erro devido a usuário não existente na base de dados
Given É um usuário não cadastrado no sistema
When Colocar informações aleatórias nos campos de login e senha
Then O usuário recebe uma mensagem de erro na tela de login informando que o usuário não existe no sistema
And Pede para inserir informações corretas ou se cadastrar no sistema

Scenario Autenticação processada com erro devido a tentativa de acessar a plataforma por um link direto sem efetuar login
Given Qualquer pessoa tentar acessar o sistema por algum link direto para páginas internas
When Tentar entrar em alguma página interna sem fazer login antes
Then O usuário recebe uma mensagem de erro na tela de login informando que está tentando acessar a plataforma sem antes fazer o login no sistema.

nova linha