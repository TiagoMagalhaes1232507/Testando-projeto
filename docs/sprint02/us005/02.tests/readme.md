# US 005 - Create a comment

# 1. Tests

**Test 1**: Valid Comment

User logged in and on the discussion page inserts a comment with more than 20 characters and less than 10,000 characters.

**Steps:**

1- At the main page, click on a discussion and navigate to the page where you can add comments.
2- Enter a valid comment in the text box with more than 20 or less than 10,000 characters.
3- Send the comment by clicking the "Post comment" button.
4- Observe if the system saves the comment correctly, shows a success message and displays this comment below the discussion.

**Expected result:** Comment is saved and displayed below the discussion.

**Test 2**: Invalid Comment

User logged in and on the discussion page inserts a comment with more than 20 characters and less than 10,000 characters.

**Steps:**

1- At the main page, click on a discussion and navigate to the page where you can add comments.
2- Enter a comment in the text box with less than 20 or more than 10,000 characters.
3- Try sending the comment by clicking the "Post comment" button.
4- Check if the system displays an error message indicating that the comment does not meet the minimum requirement or has exceeded the maximum character limit allowed.

**Expected result:** The comment is not saved and is not displayed below the discussion.

**Test 3**: Attempt to send an empty comment

User logged in and on the discussion page tries to send an empty comment. Leave the text box for adding comments completely empty.

**Steps:**

1- At the main page, click on a discussion and navigate to the page where you can add comments.
2- Leave the text box empty and try to send the comment by clicking the "Post comment" button.
3- Check if the system displays an error message indicating that the comment cannot be empty.

**Expected result**: System displays an error message indicating that the comment cannot be empty.

**Test 4**: Order of comments

User logged in and on the discussion page with multiple comments adds a new comment.

**Steps**

1- At the main page, click on a discussion and navigate to the page where you can add comments.
2- Observe the order in which the comments are displayed, from oldest to most recent.
3- Enter a valid comment in the text box and click the "Post comment" button to add the new comment to the discussion.
4- Observe whether the system saves the comment correctly and displays a success message.
5- After adding the new comment, check if it is displayed correctly in chronological order, from oldest to most recent.

**Expected result:** New comment displayed in chronological order from oldest to newest.
