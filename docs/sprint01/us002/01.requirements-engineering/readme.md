# US 002 - To login in API

## 1. Requirements Engineering


### 1.1. User Story Description


As a user I want/need to login in sistem.



### 1.2. Customer Specifications and Clarifications 


**From the specifications document:**

>	Each task is characterized by having a unique reference per organization, a designation, an informal and a technical description, an estimated duration and cost as well as the its classifying task category. 


>	As long as it is not published, access to the task is exclusive to the employees of the respective organization. 



**From the client clarifications:**

> **Question:** Which is the unit of measurement used to estimate duration?
>  
> **Answer:** Duration is estimated in days.


> **Question:** Monetary data is expressed in any particular currency?
>  
> **Answer:** Monetary data (e.g. estimated cost of a task) is indicated in POTs (virtual currency internal to the platform).


### 1.3. Acceptance Criteria


* **AC1:** The user should type their username and password.
* **AC2:** The sistem must validate username and password and present a message with the outcome 
	If the result is positive, the sistem present a message of success. 
	If result negative, the sistem present a message of insucess and user must type username and password again.


### 1.4. Found out Dependencies


* There is a dependency to "US001 xxxx" due to the user must be registred to be able to login in API.


### 1.5 Input and Output Data


**Input Data:**

* Typed data:
	* a username 
	* a password
	
* Selected data:
	* Classifying task category ??????


**Output Data:**

* (In)Success of the operation

### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us002-system-sequence-diagram-alternative-one.svg)

#### Alternative Two

![System Sequence Diagram - Alternative Two](svg/us002-system-sequence-diagram-alternative-two.svg)

### 1.7 Other Relevant Remarks

* The created task stays in a "not published" state in order to distinguish from "published" tasks.