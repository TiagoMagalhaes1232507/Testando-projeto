# US 006 - Reply directly to a comment in a Discussion

## 1. Requirements Engineering


### 1.1. User Story Description

As a user, i want to reply to a comment to take part in a Discussion.
	

### 1.2. Customer Specifications and Clarifications 


**From the specifications document:**

>	There's no customer specifications about document.

**From the client clarifications:**

There's no customer clarifications about document.


### 1.3. Acceptance Criteria


* **AC1:** The user must be logged in.  
* **AC2:** There must be an open discussion posted.
* **AC3:** The text box must have the minimum number of characters present: 
	. If so, the system accepts and displays a success pop-up message and publishes the comment - Pop-up: "Done-zoo 🤠";
	. If not, the system prompts the user to enter a minimum of 20 to 10000 characters and does not publish the comment - Pop-up: "Yeahhhhh, comments should be 20 to 10000 characters. Yours was 0. 🤠"


### 1.4. Found out Dependencies


* There is a dependency to "us001" and "us002" since we have the need to be registered and logged in.
* There is a dependency to "us005" since we need to have a previous commment and discussion topic. 



### 1.5 Input and Output Data


**Input Data:**

* Typed data:
	* username, 
	* password,
	* comment text
	
	
* Selected data:
	* Select a Discussion;
	* Select a Comment;
	* Formatting styles(Italic, Bold, Underline, hyperlink,Background Color);
	* Select "Submitt reply" button

**Output Data:**

* (In)Success of the operation
* Show the writen comment text

### 1.6. System Sequence Diagram (SSD)

**Other alternatives might exist.**

#### Alternative One

![System Sequence Diagram - Alternative One](svg/us006-system-sequence-diagram-alternative-one.svg)


### 1.7 Other Relevant Remarks

* The created task stays in a "not published" state in order to distinguish from "published" tasks.