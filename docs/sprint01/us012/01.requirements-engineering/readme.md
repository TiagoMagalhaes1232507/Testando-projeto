# US 006 - To create a Task

## 1. Requirements Engineering

### 1.1. User Story Description

Como utilizador quero aceder ao website através de um link presente numa discussion.

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

**AC1:** O usuário deve inserir email e senha para fazer login.
**AC2:** O sistema deve verificar se o email e senha estão corretos.
**AC3:** Se o email e a senha estiverem corretos, o sistema deve conceder acesso ao usuário.
**AC4:** Se o email e/ou a senha estiverem incorretos, o sistema deve exibir uma mensagem de erro.
**AC5:** Dado que o usuário fez login, deve visualizar as discussões postadas no fórum.
**AC6:** Se uma discussão postada no fórum contém um link, então este link deve ser exibido como hiperlink em uma cor ou formatacão diferente do resto do texto e deve ser clicável.
**AC7:** Quando o usuário clicar no link deve ser aberta uma nova aba navegador com a página correspondente ao link.
**AC8:** Só deve ser considerado link as urls que começarem com https://

### 1.4. Found out Dependencies

- There is a dependency to "US003 Create a task category" since at least a task category must exist to classify the task being created.

### 1.5 Input and Output Data

**Input Data:**

- Typed data:
  - a reference,
  - a designation,
  - an informal description
  - a technical description
  - an estimated duration
  - an estimated cost
- Selected data:
  - Classifying task category

**Output Data:**

- List of existing task categories
- (In)Success of the operation

### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us006-system-sequence-diagram-alternative-one.svg)

#### Alternative Two

![System Sequence Diagram - Alternative Two](svg/us006-system-sequence-diagram-alternative-two.svg)

### 1.7 Other Relevant Remarks

- The created task stays in a "not published" state in order to distinguish from "published" tasks.
