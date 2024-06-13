# US 004 - To Create a discussion 

## 1. Tests 

### 1.1. Check Required Fields Validation

**Test 1:** Check that it is not possible to create a discussion without filling in all required fields (title and text). - AC1.

**Steps:**

1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Leave the title and text field empty.
3. Click on the "Submit post" button.
4. Verify that an error message is displayed indicating the title should be 2 to 85 characters.
5. Enter title field and leave text empty.
6. Click on the "Submit post" button.
7. Verify that an error message is displayed indicating the text field should be 20 to 10000 characters.

**Expected Result:** "The system must prevent submission and provide suitable error messages for any incomplete fields."


### 1.2. Check Title Lenght Validation

**Test 2:** Check that it's impossible to create a discussion with a title containing fewer than 2 characters. - AC2.

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a title with only 1 character.
3. Enter a text that is valid.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the title field should be 2 to 85 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the title length."


**Test 3:** Check that it is not possible to submit a post with a title containing more than 85 characters - AC2.

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a title with more than 85 characters.
3. Enter a text that is valid.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the title should be 2 to 85 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the title length."

### 1.3 Check Text Lenght Validation

**Test 4:** Check that it's impossible to create a discussion with a description containing fewer than 20 characters. - AC3

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a valid title.
3. Enter a text with less than 20 characters..
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the text should be 20 to 10000 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the text length."


**Test 5:** Check that it's impossible to create a discussion with a description containing more than 10000 characters. - AC3

**Steps:**
1. At the all discussions page, click on "submit" and proceed to the submission form page.
2. Enter a valid title.
3. Enter a text with more than 10000 characters.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the text should be 20 to 10000 characters.

**Expected Result:** "The system must prevent submission and provide suitable error message for the text length."



### 1.4. Dependencies Testing

**Test 6:** Check that only register and logged users can submit posts - Dependency on "US001 and US002".

**Steps:**
1. If logged in, log out of the account.
2. Try to access the submission form page.
3. Verify that the "submit" button is inactive, as it is clickable only for users who are registered and logged in.

**Expected Result:** The system must prevent unregistered users from accessing the submission page.





