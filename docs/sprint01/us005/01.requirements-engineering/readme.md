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

**AC1:** O usuário deve inserir email e senha para fazer login. / The user must enter email and password to log in.

**AC2:** O sistema deve verificar se o email e senha estão corretos. / The system must check whether the email and password are correct.

**AC3:** Se o email e a senha estiverem corretos, o sistema deve conceder acesso ao usuário. / If the email and password are correct, the system should grant access to the user.

**AC4:** Se o email e/ou a senha estiverem incorretos, o sistema deve exibir uma mensagem de erro. / If the email and/or password are incorrect, the system should display an error message.

**AC5:** Dado que o usuário fez login, deve visualizar as discussões postadas no fórum. / Once the user is logged in, they should view the discussions posted on the forum.

**AC6:** O sistema deve exibir ao usuário uma caixa de texto vazia para inserir um comentário. / The system must display an empty text box to the user to enter a comment.

**AC7:** Quando o usuário digitar um comentário na caixa de texto, o comprimento mínimo do texto deve ter 20 caracteres e o máximo 10 mil./ When the user types a comment in the text box, the minimum text length must be 20 characters and a maximum of 10.000.

**AC8:** If the user types less than 20 or more than 10.000 characters in the text box, the system must display an error message indicating the number of characters allowed. / If the user types less than 20 characters in the text box, the system should display an error message indicating the number of characters allowed.

**AC9:** Após o usuário digitar o comentário deve clicar no botão "Post comment" o comentário deve ser salvo e exibido abaixo da discussão. / After the user types the comment, they must click on the "Post comment" button, the comment must be saved and displayed below the discussion.

**AC10:** Se o usuário tentar enviar um comentário vazio, o sistema deve exibir uma mensagem de erro indicando que o comentário não pode ser vazio. / If the user tries to send an empty comment, the system should display an error message indicating that the comment cannot be empty.

**AC11:** Quando um novo comentário for adicionado na mesma discussão, deve ser exibido em ordem cronológica do mais antigo para o mais recente. / When a new comment is added to the same thread, it should be displayed in chronological order from oldest to newest.

OBS:

**AC12:** Se o usuário quiser editar um comentário postado por ele deve clicar no botão editar próximo ao comentário.

**AC13:** Se o usuário quiser deletar um comentário postado por ele deve clicar no botão deletar próximo ao comentário.

### 1.4. Found out Dependencies

- US001
- US002
- US004

- Existe uma dependência da US001 'Registro na aplicação', pois o usuário precisa estar registrado na aplicação. / There is a dependency on US001 'Application registration', as the user needs to be registered in the application.

- Existe uma dependência da US002 'Fazer login', pois o usuário precisa estar logado na aplicação./ There is a dependency on US002 'Log in', as the user needs to be logged in to the application.

- Existe uma dependência da US004 'Criar uma discussion', pois discussions precisam existir para serem comentadas./ There is a dependency on US004 'Create a discussion', as discussions need to exist to be commented on.

### 1.5 Input and Output Data

**Input Data:**

- Typed data:

  - Email
  - Password
  - Discussion
  - Comment text

- Selected data:
  - Classifying task category ??????

**Output Data:**

- Sistema informa mensagem de sucesso confirmando a postagem do comentário./ System informs a success message confirming the posting of the comment.

- A discussion é atualizada com data e hora do comentário. (timestamp). / The discussion is updated with the date and time of the comment. (timestamp).

### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us006-system-sequence-diagram-alternative-one.svg)

#### Alternative Two

![System Sequence Diagram - Alternative Two](svg/us006-system-sequence-diagram-alternative-two.svg)

### 1.7 Other Relevant Remarks

- The created task stays in a "not published" state in order to distinguish from "published" tasks.
