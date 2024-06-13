# US 006 - Reply directly to a post in a discussion

## 1. Requirements Engineering


### 1.1. User Story Description

As an user, i want to be able to reply to a comment so that I can take part in a discussion.
	

### 1.2. Customer Specifications and Clarifications 


**From the specifications document:**

> There's no customer specifications about document.

**From the client clarifications:**

> There's no customer clarifications about document.


### 1.3. Acceptance Criteria


* **AC1:** The user must be logged in.
* **AC2:** There must be a post with at least one comment.  
* **AC3:** The reply text box must contain between 20 and 10,000 characters. 
	* If the criteria are met, the system will display a success message: "Done-zoo 🤠" and publish the comment.
	* If the criteria are not met, the system will prompt the user to enter a valid number of characters with the message: "Yeahhhhh, comments should be 20 to 10000 characters. Yours was [actual count]. 🤠"


### 1.4. Found out Dependencies


* There is a dependency to "US001" and "US002" since we have the need to be registered and logged in.
* There is a dependency to "US005" since we need to have a previous commment and discussion topic. 



### 1.5 Input and Output Data


**Input Data:**

* Typed data:
	* Reply Text: The text entered by the user in the reply text box.
	
	
* Selected data:
	* Discussion: The user navigates to and selects an open discussion.
	* Comment: The user selects the specific comment they want to reply to.
	* Reply Button: The user clicks the "reply" button to initiate the reply.
	* Submit Reply Button: The user clicks the "Submit reply" button to post the reply.

**Output Data:**

* Operation Result:
	* Success: If the reply meets the criteria (e.g., character length), a success message is shown, and the reply is published.
	* Failure: If the reply does not meet the criteria, an error message is shown, and the reply is not published.

* Redirection:
	* The user is redirected to the newly created reply instance page.

### 1.6. System Sequence Diagram (SSD)

![System Sequence Diagram - Alternative One](svg/us006-system-sequence-diagram-copy.svg)


### 1.7 Other Relevant Remarks

* Reply Notification System:

	* Implement a notification system to alert users when someone replies to their comment.
	* Notifications can be in-app, via email, or both, depending on user preferences.

* Reply Editing and Deletion:

	* Allow users to edit or delete their replies within a certain time frame.
	* Include appropriate UI elements (e.g., edit and delete buttons) and confirmation dialogs to prevent accidental deletions.

* Preview feature:

	* Provide a preview feature so users can see how their reply will look before posting it.


* Load More Replies:

	* For discussions with a large number of replies, implement a "load more" feature to improve page performance and user experience.
