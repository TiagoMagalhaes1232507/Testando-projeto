# US 0012 - To create a Task

## 1. Requirements Engineering

### 1.1. User Story Description

Como utilizador quero aceder ao website através de um link presente numa discussion./ As a user, I want to access the website through a link present in a discussion.

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

**AC1:** O usuário deve inserir email e senha para fazer login./ The user must enter email and password to log in.

**AC2:** O sistema deve verificar se o email e senha estão corretos./ The system must check whether the email and password are correct.

**AC3:** Se o email e a senha estiverem corretos, o sistema deve conceder acesso ao usuário./ If the email and password are correct, the system should grant access to the user.

**AC4:** Se o email e/ou a senha estiverem incorretos, o sistema deve exibir uma mensagem de erro./ If the email and/or password are incorrect, the system should display an error message.

**AC5:** Dado que o usuário fez login, deve visualizar as discussões postadas no fórum./ Once the user is logged in, they should view the discussions posted on the forum.

**AC6:** Se uma discussão postada no fórum contém um link, então este link deve ser exibido como hiperlink em uma cor ou formatacão diferente do resto do texto e deve ser clicável./ If a discussion posted to the forum contains a link, then this link must be displayed as a hyperlink in a different color or formatting than the rest of the text and must be clickable.

**AC7:** Quando o usuário clicar no link deve ser aberta uma nova aba navegador com a página correspondente ao link./ When the user clicks on the link, a new browser tab must open with the page corresponding to the link.

**AC8:** Só deve ser considerado link as urls que começarem com https:// Only urls that begin with https:// should be considered links.

### 1.4. Found out Dependencies

- US001
- US002
- US004
- US007

- Existe uma dependência da US001 'Registro na aplicação', pois o usuário precisa estar registrado na aplicação./ There is a dependency on US001 'Application registration', as the user needs to be registered in the application.

- Existe uma dependência da US002 'Fazer login', pois o usuário precisa estar logado na aplicação./ There is a dependency on US002 'Log in', as the user needs to be logged in to the application.

- Existe uma dependência da US004 'Criar uma discussion', pois discussions precisam existir para serem comentadas./ There is a dependency on US004 'Create a discussion', as discussions need to exist to be commented on.

- Existe uma dependência da US007 'Postar um link/hiperligação', pois links precisam existir para serem clicados./ There is a dependency on US007 'Post a link/hyperlink', as links need to exist to be clicked.

### 1.5 Input and Output Data

**Input Data:**

- Typed data:

  - Email;
  - Password;
  - Discussion
  - Link url

- Selected data:
  - Classifying task category ??????

**Output Data:**

- Opening the url in a new tab;
- Success message;

### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us006-system-sequence-diagram-alternative-one.svg)

#### Alternative Two

![System Sequence Diagram - Alternative Two](svg/us006-system-sequence-diagram-alternative-two.svg)

### 1.7 Other Relevant Remarks

- The created task stays in a "not published" state in order to distinguish from "published" tasks.
