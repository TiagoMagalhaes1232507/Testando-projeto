# US 004 - Create Text Post 

## 1. Tests 

### 1.1. Check Required Fields Validation

**Test 1:** Check that it is not possible to create a Text Post without filling in all required fields (Title and Text). - AC1.

**Steps:**

1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Leave the Title and Text field empty.
3. Click on the "Submit post" button.
4. Verify that an error message is displayed indicating the Title should be 2 to 85 characters.
5. Enter Title field and leave Text empty.
6. Click on the "Submit post" button.
7. Verify that an error message is displayed indicating the Text field should be 20 to 10000 characters.

**Expected Result:** "The system must prevent submission and provide suitable error messages for any incomplete fields."


### 1.2. Check Title Lenght Validation

**Test 2:** Check that it's impossible to create a Post with a Title containing fewer than 2 characters. - AC2.

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a Title with only 1 character.
3. Enter a Text that is valid.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the Title field should be 2 to 85 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the Title length."


**Test 3:** Check that it is not possible to submit a post with a Title containing more than 85 characters - AC2.

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a Title with more than 85 characters.
3. Enter a Text that is valid.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the Title should be 2 to 85 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the title length."

### 1.3 Check Text Lenght Validation

**Test 4:** Check that it's impossible to create a Post with a Text containing fewer than 20 characters. - AC3

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a valid Title.
3. Enter a Text with less than 20 characters.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the Text should be 20 to 10000 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the Text length."


**Test 5:** Check that it's impossible to create a Post with a description containing more than 10000 characters. - AC3

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a valid Title.
3. Enter a Text with more than 10000 characters.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the Text should be 20 to 10000 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the Text length."




### 1.4. Dependencies Testing

**Test 6:** Check that only register and logged users can submit posts - Dependency on "US001 and US002".

**Steps:**
1. If logged in, log out of the account.
2. Try to access the submission form page.
3. Verify that the "submit" button is inactive, as it is clickable only for users who are registered and logged in.

**Expected Result:** "The system must prevent unregistered users from accessing the submission page."



### 1.5. Check Create Text Post

**Test 7:** Check if it is possible to create a Text Post with a Title of 5 characters and Text of 30 characters

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a Title with 5 characters.
3. Enter a Text with 30 characters.
4. Click on the "Submit post" button.
5. Verify that a successful message is displayed and the page is redirected to the "All Discussions" page.

**Expected Result:** "The system must create Text Post, provide a suitable success message, and return to the "All Discussions" page."


