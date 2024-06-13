# US 004 - Create a discussion 

## 1. Requirements Engineering


### 1.1. User Story Description


As a registered user, I want to create a discussion.



### 1.2. Customer Specifications and Clarifications 


**From the specifications document:**

>	There's no customer specifications about document.


**From the client clarifications:**

>  There's no client clarifications about this project.

### 1.3. Acceptance Criteria


* **AC1:** All required fiels must be filled in.
* **AC2:** Title must have beetween 2 and 85 characters.
* **AC3:** Text post should be 20 to 10000 characters.



### 1.4. Found out Dependencies

* There is a dependency to "US001 As an unregistered user, I want to register on the application (join)" as being registered is a requirement for this task.

* There is a dependency to "US002 As a user I want/need to login in sistem" since i need to login to make a discussion.



### 1.5 Input and Output Data


**Input Data:**

* Typed data:
	* title
	* text

	
* Selected data:
	* Classifying task category 


**Output Data:**

* Confirmation of successful discussion submission
* Error messages in case of validation failures


### 1.6. System Sequence Diagram (SSD)


![System Sequence Diagram - Alternative One](svg/us004-system-sequence-diagram.svg)




### 1.7 Other Relevant Remarks

* The system should ensure data integrity by validating the input fields before saving the discussion to the database.
* Spaces in the fields should not be counted as characters, otherwise there is no point is range the titles since this allows the title to be in blank. 
* Clicking on enter in text or spaces should not count as a character, otherwise te system is allowing blank dscussions.
* In case of a failure, the system should allow the user to correct the errors and resubmit the discussion.
* Error messages should be clear, professional, concise and explicit. 
