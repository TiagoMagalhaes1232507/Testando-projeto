# US 007 - Post with a Link

## 1. Tests 

### 1.1. Check Required Fields Validation

**Test 1:** Check that it is not possible to submit a post without filling in all required fields (title and link) - AC1.

**Steps:**
1. At the main page, click on "submit" and navigate to the submission form page.
2. Leave the title field empty and enter a valid link.
3. Click on the "Submit post" button.
4. Verify that an error message is displayed indicating the title is required to be within the specified length (2-85 characters).
5. Clear the link field and enter a valid title.
6. Click on the "Submit post" button.
7. Verify that an error message is displayed indicating the link field is required to be within the specified length (8-500 characters).

**Expected Result:** The system should not allow submission and should display appropriate error messages for the missing fields.

### 1.2. Check Title Length Validation

**Test 2:** Check that it is not possible to submit a post with a title containing less than 2 characters - AC2.

**Steps:**
1. At the main page, click on "submit" and navigate to the submission form page.
2. Enter a title with only 1 character.
3. Enter a valid link.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the title is required to be within the specified length (2-85 characters).

**Expected Result:** The system should not allow submission and should display an error message for the title length.

**Test 3:** Check that it is not possible to submit a post with a title containing more than 85 characters - AC2.

**Steps:**
1. At the main page, click on "submit" and navigate to the submission form page.
2. Enter a title with more than 85 characters.
3. Enter a valid link.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the title is required to be within the specified length (2-85 characters).

**Expected Result:** The system should not allow submission and should display an error message for the title length.

### 1.3. Check Link Length Validation

**Test 4:** Check that it is not possible to submit a post with a link containing less than 8 characters - AC3.

**Steps:**
1. At the main page, click on "submit" and navigate to the submission form page.
2. Enter a valid title.
3. Enter a link with less than 8 characters.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the link field is required to be within the specified length (8-500 characters).

**Expected Result:** The system should not allow submission and should display an error message for the link length.

**Test 5:** Check that it is not possible to submit a post with a link containing more than 500 characters - AC3.

**Steps:**
1. At the main page, click on "submit" and navigate to the submission form page.
2. Enter a valid title.
3. Enter a link with more than 500 characters.
4. Click on the "Submit post" button.
5. Verify that an error message is displayed indicating the link field is required to be within the specified length (8-500 characters).

**Expected Result:** The system should not allow submission and should display an error message for the link length.

### 1.4. Check Link Format Validation

**Test 6:** Check that it is not possible to submit a post with an invalid link format (not starting with HTTP, HTTPS, or FTP) - AC4.

**Steps:**
1. At the main page, click on "submit" and navigate to the submission form page.
2. Enter a valid title.
3. Enter a link that does not start with HTTP, HTTPS, or FTP (e.g., "invalidlink").
4. Click on the "Submit post" button.
5. Verify that an error message is displayed.
5. Verify that the system redirects to all discussions.
6. Verify that the post was not created.

**Expected Result:** The system should not allow submission and should display an error message.

### 1.5. Dependencies Testing

**Test 7:** Check that only logged users can submit posts - Dependency on "US001 User Registration".

**Steps:**
1. Log out if currently logged in.
2. Attempt to navigate to the submission form page.
3. Verify that the "submit" button is not activated because is only clickable for registered users.

**Expected Result:** The system should prevent unregistered users from accessing the submission page.
