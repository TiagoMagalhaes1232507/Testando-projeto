# Switch-QA Project for the 1st Semester 2024

## How to generate the svg files

These templates use [PlantUML](https://plantuml.com) to generate the diagrams that are displayed in the readme. You may use any tool you choose.

If you want to use PlantUML, on project root folder, run the following script:

Remarks: it works for Linux and MacOS. For Windows, you have to adapt the script.

```shell
$ bin/generate-plantuml-diagrams.sh
```

## 1. Team Members

The team consists of students identified in the following table.

| Student Number | Name              |
| -------------- | ----------------- |
| **1130533**    | Rita Semedo       |
| **1181731**    | Tiago Martins     |
| **1232493**    | Ana Rita Ramos    |
| **1232497**    | Roberta Lucena    |
| **1232500**    | João Pedro Costa  |
| **1232507**    | Tiago Magalhães   |
| **1232512**    | Ana Júlia Bastos  |


## 2. Task Distribution

Throughout the project's development period, the distribution of _tasks / requirements / features_ by the team members
was carried out as described in the following table.


| Task                        | [Sprint A](sprintA/readme.md)                                                              | [Sprint B](sprintB/readme.md)                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Architecture                | [all](sprintA/global-artifacts/00.architecture/architecture.md)                            | [all](sprintB/global-artifacts/00.architecture/architecture.md)                            |
| Glossary                    | [all](sprintA/global-artifacts/01.requirements-engineering/glossary.md)                    | [all](sprintB/global-artifacts/00.engineering-requirements/glossary.md)                    |
| Use Case Diagram (UCD)      | [all](sprintA/global-artifacts/01.requirements-engineering/use-case-diagram.md)            | [all](sprintB/global-artifacts/00.engineering-requirements/use-case-diagram.md)            |
| Supplementary Specification | [all](sprintA/global-artifacts/01.requirements-engineering/supplementary-specification.md) | [all](sprintB/global-artifacts/00.engineering-requirements/supplementary-specification.md) |
| US 001 (User Registration)  | [1232512](sprint01/us001/readme.md)                                                        |
| US 002 (To Login in System) | [1232493](sprint01/us002/readme.md)                                                        |
| US 003 (View discussions list as Unregistered User)     | [1232500](sprint01/us003/readme.md)                                                        |
| US 004 (Create a discussion)| [1130533](sprint01/us004/readme.md)                                                        |
| US 005 (Create a comment)   | [1232497](sprint01/us005/readme.md)                                                        |
| US 006 (Reply directly to a comment in a Discussion)| [1232507](sprint01/us006/readme.)                                                        |
| US 007 (Create Link Post)     | [1181731](sprint01/us007/readme.md)                                                      |
| US 008 (To vote on a discussion)     | [1232512](sprint01/us008/readme.md)                                               |
| US 009 (To format a discussion)     | [1232493](sprint01/us009/readme.md)                                                |
| US 010 (To vote on a discussion)     | [1232500](sprint01/us010/readme.md)                                               |
| US 011 (To Logout)     | [1130533](sprint01/us011/readme.md)                                                        |
| US 012 (Access a discussion link)     | [1232497](sprint01/us012/readme.md)                                              |
| US 013 (Discussion's list ordered by date)     | [1232507](sprint01/us013/readme.md)                                                        |
| US 014 (Discussion's list ordered by popularity)     | [1232507](sprint01/us014/readme.md)                                                        |

## 3. Sprints

**Project:** DDD Forum ISEP

### 3.1 Sprint A

**Goal:** To produce the specification of the existing version of the system

**User Story:** As a project manager, I want the team to produce the specification of the existing version of the system

The specificcation should follow the templates, as presented here and in the referenced links.

The Specification should include: - User Stories (~Use Cases) - Tests

### 3.2 Sprint B

**Goal:** To document the API and implement API tests to the full set of functional endpoints (of the backend)

**User Story:** As a project manager, I want the team to specify (document) the API and implement API tests

The specification of the API should include for each route: - the action (GET, POST, etc.) - a small description - parameters - possible response codes and results - reference to related use cases and acceptance criteria

You should place the API specification in the **docs/sprintB/api** folder. Inside this folder, you should create a file for each route. The file name should be the route name, with the extension **.md**. For example, the route **/api/v1/users** should be documented in the file **docs/sprintB/api/users.md**.

The implementation of the API tests should follow the examples, as described in the root **readme** file and the code, as presented in the **src/api_test** folder
