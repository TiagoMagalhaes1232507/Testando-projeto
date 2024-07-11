# Switch-QA Project for the 1st Semester 2024

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

| Task          |[Sprint 01](sprint01/readme.md)                                  | [Sprint 02](sprint01/readme.md)                               |
| -------------- | -------------------------------------------------------------------|--------------------------------------------------------------|
| Architecture   | [all](sprint01/global-artifacts/00.architecture/architecture.md) | [all](sprint02/global-artifacts/00.architecture/architecture.md)|       
| Glossary       | [all](sprint01/global-artifacts/01.requirements-engineering/glossary.md) |  [all](sprint02/global-artifacts/01.requirements-engineering/glossary.md)                              
| Use Case Diagram (UCD)    |[1232507](sprint01/global-artifacts/01.requirements-engineering/use-case-diagram.md)             | [1232507](sprint02/global-artifacts/01.requirements-engineering/use-case-diagram.md) |                                                    
| Supplementary Specification    | [1232507 ; 1232512](sprint01/global-artifacts/01.requirements-engineering/supplementary-specification.md)|  
| Domain Model  | [1181731]()|
| US 001 (User Registration)  | [1232512](sprint01/us001/readme.md)  |     [1232512](sprint02/us001/readme.md)                        |
| US 002 (To Login in System) | [1232493](sprint01/us002/readme.md)|   [1232493](sprint02/us002/readme.md)                            |
| US 003 (View discussions list as Unregistered User)   | [1232500](sprint01/us003/readme.md) | [1232500](sprint01/us003/readme.md)   |
| US 004 (Create a discussion)| [1130533](sprint01/us004/readme.md)  | US 004 (Create Text Post)  [1130533](sprint02/us004/readme.md)                                     |
| US 005 (Create a comment) | [1232497](sprint01/us005/readme.md)  |[1232497](sprint02/us005/readme.md)|
| US 006 (Reply directly to a comment in a Discussion)| [1232507](sprint01/us006/readme.md) | [1232507](sprint02/us006/readme.md)|
| US 007 (Create Link Post)     | [1181731](sprint01/us007/readme.md)  |[1181731](sprint02/us007/readme.md) |
| US 008 (To vote on a discussion)     | [1232512](sprint01/us008/readme.md)  |[1232512](sprint02/us008/readme.md)  |
| US 009 (To format a discussion)  | [1232493](sprint01/us009/readme.md)    | US 009 (Doesnt corespond to a user storie)   | 
| US 010 (Discussion's list ordered by popularity)   | [1232507](sprint01/us010/readme.md)   | [1232507](sprint02/us010/readme.md)  |
| US 011 (To Logout)     | [1130533](sprint01/us011/readme.md)       | [1130533](sprint02/us011/readme.md) |
| US 012 (Access a discussion link)     | [1232497](sprint01/us012/readme.md)     |[1232497](sprint01/us012/readme.md)   |
| US 013 (Discussion's list ordered by date)     | [1232507](sprint01/us013/readme.md)   | [1232507](sprint02/us013/readme.md) |
| Package Diagram || [1232493]() |
| Dependencies    || [1232512](sprint02/global-artifacts/Dependencies.md) |
| Requirements Matrix    || [All](sprint01/us013/readme.md) |
|Endpoints|||
| Comments  || [1232497 ; 1232512](sprint02/api/comments.md)|
| Members   || [1232493](sprint02/api/members.md)|  
| Posts     || [1130533 ; 1181731](sprint02/api/posts.md) | 
| Users     || [1232507 ; 1232500](sprint02/api/users.md) |
|Endpoint Tests|||
|Comments  || [1232497](../src/automated-tests/comments/comments-tests.spec.ts)|
|Comments  ||[1232512](../src/automated-tests/comments/comments-tests2.spec.ts)|  
|Members   || [1232493](../src/automated-tests/members-tests.spec.ts)|  
|Posts     || [1130533](../src/automated-tests/posts/posts-tests.spec.ts)| 
|Posts     ||[1181731](../src/automated-tests/posts/posts2-tests.spec.ts)|
|Users     || [1232500 ; 1232507](../src/automated-tests/users-tests.spec.ts) |

                                                                                    


## 3. Sprints

**Project:** DDD Forum ISEP

### 3.1 Sprint 01

**Goal:** To produce the specification of the existing version of the system

**User Story:** As a project manager, I want the team to produce the specification of the existing version of the system

The specificcation should follow the templates, as presented here and in the referenced links.

The Specification should include: - User Stories (~Use Cases) - Tests

### 3.2 Sprint 02

**Goal:** To document the API and implement API tests to the full set of functional endpoints (of the backend)

**User Story:** As a project manager, I want the team to specify (document) the API and implement API tests

The specification of the API should include for each route: - the action (GET, POST, etc.) - a small description - parameters - possible response codes and results - reference to related use cases and acceptance criteria

You should place the API specification in the **docs/sprintB/api** folder. Inside this folder, you should create a file for each route. The file name should be the route name, with the extension **.md**. For example, the route **/api/v1/users** should be documented in the file **docs/sprintB/api/users.md**.

The implementation of the API tests should follow the examples, as described in the root **readme** file and the code, as presented in the **src/api_test** folder
