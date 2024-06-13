# US 001 - User Registration

# 1. Tests 

**Test Case for Acceptance Criteria 1: Registration Form** 

Objective: Verify that the system provides a functional registration form for new users to create accounts.

Steps:

1. Select the "Join" button to Navigate to the registration page.
2. Verify form presence: confirm that a registration form exists on the page, containing essential fields for user information. (Username, Email, Password)
3. Validate form elements: ensure each form element is functional:
	* Text fields allow for user input (username, email, password),
	* Password field offers password masking for security, 
4. Attempt registration: enter valid data into the form fields.
5. Submit the form: click the "Submit" button to finalize the registration process.

Expected Results:

* The registration form should be present and accessible on the designated page,
* All form elements should function correctly, allowing users to enter data,
* Upon successful registration, the system should provide a confirmation message, 
* In case of errors (e.g., missing fields, invalid data), the system should display clear error messages for each issue.

Pass/Fail Criteria:

* The test case passes if the registration form is present, functional, and successfully creates new user accounts with valid data.
* The test case fails if the form is missing, elements are non-functional or registration fails without clear error messages. 


**Test Case for Acceptance Criteria 2: User Input Validation During Registration**

Objective: Verify that the system enforces proper validation of user-provided information during the registration process.

Steps:

1. Select the "Join" button to Navigate to the registration page.
2. Enter Invalid Data: submit a registration form with intentionally invalid data in one or more fields. This could include:
    * Empty email, username or password fields,
    * Password not meeting requirements (minimum length requirement: 6 characters),
    * Invalid email format (e.g., missing @ symbol and ".", invalid domain name),
    * Duplicate usernames or email addresses.
3. Observe Validation Response: check the system's response to the invalid data. This involve error messages displayed.
4. Repeat with Different Errors: repeat step 2 with various invalid data scenarios to test different validation rules.
5. Enter Valid Data: finally, submit the registration form with valid and complete information in all fields.

Expected Results:

* The system should not allow registration with invalid data.
* For each invalid field, clear and informative error messages should be displayed, guiding the user towards correcting the issue.
* The registration form submission should be prevented until all validation errors are resolved.
* Upon entering valid data, the registration process should proceed successfully.

Pass/Fail Criteria:

* The test case passes if the system enforces validation rules for all required fields, displays informative error messages for invalid data, and prevents registration attempts with errors.
* The test case fails if the system allows registration with invalid data, lacks proper error messages, or doesn't validate specific user information fields.


**Test Case for Acceptance Criteria 3: User Account Creation**

Objective: verify that the system successfully creates a new user account when a user registers with valid information.

Steps:

1. Select the "Join" button to Navigate to the registration page.
2. Enter user information: fill in the registration form with valid data, including username, password and email address.
3. Submit registration: submit the completed registration form.
4. Verify account creation:

Expected Results:

* The registration process completes successfully without errors. The system displays a success message.

Pass/Fail Criteria:

* The test case passes if the user can successfully register a new account.
* The test case fails if the registration process encounters errors and fails to create an account.


**Test Case for Acceptance Criteria 4: Registration Feedback**

Objective: Verify that the system displays appropriate feedback messages to the user after attempting registration.

Steps:

1. Select the "Join" button to Navigate to the registration page.
2. Successful Registration:
    * Enter valid registration data (username, password, email) as specified by the system.
    * Submit the registration form.
3. Unsuccessful Registration: (Perform at least two variations)
    * Enter invalid data (e.g., missing field, incorrect email format).
    * Submit the registration form.
    * Enter data that already exists in the system (e.g., email already taken).
    * Submit the registration form.
4. Verify Message Display:
    * After successful registration, check if a success message is displayed on the screen.
    * After unsuccessful registration attempts, check if an error message is displayed.

Expected Results:

* Upon successful registration, a clear and informative success message should be displayed.
* Upon unsuccessful registration attempts, a clear and informative error message with specific details about the issue should be displayed.

Pass/Fail Criteria:

* The test case passes if a message is displayed after successful or unsuccessful registration.
* The test case fails if no message is displayed after registration (successful or unsuccessful).












