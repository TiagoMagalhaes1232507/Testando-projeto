# US 005 - Create a comment

# 1. Tests

**Test 1**: Successful login
Registered user enters correct email and password.
Expected result: Access granted to the user.

**Test 2**: Login with invalid email or password
Registered user enter invalid email or password.
Expected result: System displays error message.

**Test 3**: Valid comment
User logged in and on the discussion page inserts a comment with more than 20 characters.
Expected result: Comment is saved and displayed below the discussion.

**Test 4**: Invalid comment (less than 20 characters)
User logged in and on the discussion page inserts a comment with less than 20 characters.
Expected result: System displays an error message indicating the minimum number of characters.

**Test 5**: Attempt to send an empty comment
User logged in and on the discussion page tries to send an empty comment.
Expected result: System displays an error message indicating that the comment cannot be empty.

**Test 6**: Order of comments
User logged in and on the discussion page with multiple comments adds a new comment.
Expected result: New comment displayed in chronological order from oldest to newest.
