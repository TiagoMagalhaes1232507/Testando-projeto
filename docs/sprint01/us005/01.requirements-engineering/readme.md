# US 005 - To create a Task

## 1. Requirements Engineering

### 1.1. User Story Description

As a registered user I want to comment on a discussion.
Como utilizador registado quero comentar uma discussion.

### 1.2. Customer Specifications and Clarifications

**From the specifications document:**

>     Each task is characterized by having a unique reference per organization, a designation, an informal and a technical description, an estimated duration and cost as well as the its classifying task category.

>     As long as it is not published, access to the task is exclusive to the employees of the respective organization.

**From the client clarifications:**

> **Question:** Which is the unit of measurement used to estimate duration?
>
> **Answer:** Duration is estimated in days.

> **Question:** Monetary data is expressed in any particular currency?
>
> **Answer:** Monetary data (e.g. estimated cost of a task) is indicated in POTs (virtual currency internal to the platform).

### 1.3. Acceptance Criteria

CA1: O usuário deve inserir email e senha para fazer login.
CA2: O sistema deve verificar se o email e senha estão corretos.
CA3: Se o email e a senha estiverem corretos, o sistema deve conceder acesso ao usuário.
CA4: Se o email e/ou a senha estiverem incorretos, o sistema deve exibir uma mensagem de erro.
CA5: Dado que o usuário fez login, deve visualizar as discussões postadas no fórum.
CA6: Então o usuário deve ver uma caixa de texto vazia para inserir um comentário.
CA7: Quando o usuário digitar um comentário na caixa de texto, o comprimento mínimo do texto deve ter 20 caracteres.
CA8: Se o usuário digite menos de 20 caracteres na caixa de texto, o sistema deve exibir uma mensagem de erro indicando a quantidade de caracteres permitida.
CA9: Após o usuário digitar o comentário deve clicar no botão "Post comment" o comentário deve ser salvo e exibido abaixo da discussão.  
CA10: Se o usuário tentar enviar um comentário vazio, o sistema deve exibir uma mensagem de erro indicando que o comentário não pode ser vazio.
CA11: Quando um novo comentário for adicionado na mesma discussão, deve ser exibido em ordem cronológica do mais antigo para o mais recente.

OBS:
CA12: Se o usuário quiser editar um comentário postado por ele deve clicar no botão editar próximo ao comentário.
CA13: Se o usuário quiser deletar um comentário postado por ele deve clicar no botão deletar próximo ao comentário.

### 1.4. Found out Dependencies

- US001
- US002
- US004

- Existe uma dependência da US001 'Registro na aplicação', pois o usuário precisa estar registrado na aplicação.

- Existe uma dependência da US002 'Fazer login', pois o usuário precisa estar logado na aplicação.

- Existe uma dependência da US004 'Criar uma discussion', pois discussions precisam existir para serem comentadas.

### 1.5 Input and Output Data

**Input Data:**

- Typed data:
  - Email
  - Password
  - Discussion
  - Texto do comentário
- Selected data:
  - Classifying task category

**Output Data:**

- Sistema informa mensagem de sucesso confirmando a postagem do comentário.

- A discussion é atualizada com data e hora do comentário. (timestamp).

### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us006-system-sequence-diagram-alternative-one.svg)

#### Alternative Two

![System Sequence Diagram - Alternative Two](svg/us006-system-sequence-diagram-alternative-two.svg)

### 1.7 Other Relevant Remarks

- The created task stays in a "not published" state in order to distinguish from "published" tasks.
