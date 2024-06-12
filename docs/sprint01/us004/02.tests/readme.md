# US 004 - To Create a discussion 

# 1. Tests 

1. Tests

Test AC1: Verify that the submit button functions properly.

Upon clicking the submit button, the user should be redirected to a new page where they can create a post. It is essential to be logged in for this to occur; otherwise, the functionality will not work.

Test AC2: Ensure that it's impossible to create a task without completing all required fields.

All fields must be filled out entirely. If spaces are left in the fields, they will be counted as characters, resulting in empty fields. This situation needs to be addressed.

Test AC3: Verify that it's impossible to create a task with a title containing fewer than 2 characters or more than 85.

Attempting to submit a title with fewer than 2 characters or more than 85 will trigger an error message, indicating the required field and the number of characters entered. Spaces in the fields will be counted as characters but will result in empty fields, which needs correction.

Test AC4: Verify that it's impossible to create a task with a description containing fewer than 20 characters or more than 10000.

Submitting a description with fewer than 20 characters or more than 10000 will prompt an error message, specifying the required field and the character count. Pressing enter for a new line or leaving spaces exceeding 20 characters will be considered as characters but result in empty fields, requiring correction.

Test AC5: Validate the success of the task creation operation.

Upon receiving a "done-zo" green message on the screen indicating success, the user should be redirected to the "all discussions" page.





