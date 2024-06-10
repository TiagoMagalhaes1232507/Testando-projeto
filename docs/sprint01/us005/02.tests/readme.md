# US 006 - To create a Task

# 1. Tests

**Teste 1**: Login bem sucedido
Usuário registrado insere email e senha corretos.
Resultado esperado: Acesso concedido ao usuário.
**Test 1**: Successful login
Registered user enters correct email and password.
Expected result: Access granted to the user.

**Teste 2**: Login com email ou senha inválidos
Usuário registrado insere email ou senha inválidos.
Resultado esperado: Sistema exibe mensagem de erro.
**Test 2**: Login with invalid email or password
Registered user enter invalid email or password.
Expected result: System displays error message.

**Teste 3**: Comentário válido
Usuário logado e na página da discussão insere um comentário com mais de 20 caracteres.
Resultado esperado: Comentário é salvo e exibido abaixo da discussão.
**Test 3**: Valid comment
User logged in and on the discussion page inserts a comment with more than 20 characters.
Expected result: Comment is saved and displayed below the discussion.

**Teste 4**: Comentário inválido (menos de 20 caracteres)
Usuário logado e na página da discussão insere um comentário com menos de 20 caracteres.
Resultado esperado: Sistema exibe mensagem de erro indicando a quantidade miníma de caracteres.
**Test 4**: Invalid comment (less than 20 characters)
User logged in and on the discussion page inserts a comment with less than 20 characters.
Expected result: System displays an error message indicating the minimum number of characters.

**Teste 6**: Tentativa de enviar um comentário vazio
Usuário logado e na página da discussão tenta enviar um comentário vazio.
Resultado esperado: Sistema exibe mensagem de erro indicando que o comentário não pode ser vazio.  
**Test 6**: Attempt to send an empty comment
User logged in and on the discussion page tries to send an empty comment.
Expected result: System displays an error message indicating that the comment cannot be empty.

**Teste 7**: Ordem dos comentários
Usuário logado e na página da discussão com múltiplos comentários adiciona um novo comentário.
Resultado esperado: Novo comentário exibido em ordem cronológica do mais antigo para o mais recente.
**Test 7**: Order of comments
User logged in and on the discussion page with multiple comments adds a new comment.
Expected result: New comment displayed in chronological order from oldest to newest.
