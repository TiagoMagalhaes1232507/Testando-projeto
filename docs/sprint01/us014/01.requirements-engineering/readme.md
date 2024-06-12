# US 014 - Discussion's list ordered by popularity

## 1. Requirements Engineering


### 1.1. User Story Description

As a user, i want to see all the discussion's list ordered by popularity.
	

### 1.2. Customer Specifications and Clarifications 


**From the specifications document:**

>	There's no customer specifications about document.

**From the client clarifications:**

There's no customer clarifications about document.

### 1.3. Acceptance Criteria


* **AC1:** The system should display a list of all available discussions when the user navigates to the discussions page.
* **AC2:** Each discussion in the list should display key information such as the discussion title, author, the number of comments creation date and upvote/downvote count.
* **AC3:** The user should be able to sort the list by popularity.

### 1.4. Found out Dependencies


* There is a dependency to "us001" and "us002" since we have the need to be registered and logged in.


### 1.5 Input and Output Data


**Input Data:**

* Typed data:
	* none (Homepage default page) 
	note: no action needed. It is presented in the main system page.
	
	
* Selected data:
	* none none (Homepage default page) 


**Output Data:**

* List ordered by popularity (Homepage default)


### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us014-system-sequence-diagram-alternative-one.svg)


### 1.7 Other Relevant Remarks

* Unrestricted Content Access: Unregistered users can browse and view posts freely.
Restricted Actions: Upvoting and downvoting functionality is reserved for registered users.