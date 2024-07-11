# Test Cases and Analysis : 
## Get Comments by Post Slug endpoint: /api/v1/comments/?{slug}

## Test: [CTC01 - Get Comments by Post Slug (success - Valid slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 200 and a array of comments objects.

### Description
This is a test case for an API that retrieves comments for a post. The test verifies that the API correctly returns the comments associated with a specific post when a valid slug is provided.

### Analysis
The test `CTC01 - Get Comments by Post Slug (success - Valid slug parameter)` checks the following:

**Input:** 
A valid slug for an existing post.

**Expected output:**
- HTTP status code 200 (OK)
- Response body containing an array of objects representing the post's comments.

**Result:** 
The test passed, indicating that the API returned the expected response for a valid slug.

### Conclusion
The test case was successful, confirming that the API functions correctly when retrieving comments for a post using a valid slug.

## Test: [CTC02 - Get Comments by Post Slug (Error - Invalid slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 404 and a correct message.

### Description
This is a test case for an API that retrieves comments for a post. The test focuses on the scenario where the provided `slug` parameter is invalid.

### Analysis
The test `CTC02 - Get Comments by Post Slug (Error - Invalid slug parameter)` verifies whether the API returns the correct HTTP status code and appropriate error message when an invalid slug is provided.

**Input:**
Invalid `slug` parameter

**Expected:**
- Status code: 404 Not Found
- Response body: "Couldn't find a post by slug {${slug}}" (where `{$slug}` represents the provided invalid slug)

**Result:**
The test failed. This means the API did not return the expected status code and/or error message when an invalid slug was provided.

### Conclusion
The test case failed, indicating that the API might not be handling invalid slugs correctly. It's necessary to investigate the cause of the failure to ensure the API returns the appropriate status codes and error messages for different scenarios.

## Test: [CTC03 - Get Comments by Post Slug (Error - Empty slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 400 and a correct message.

### Description
This is a test case for an API that retrieves comments for a post. This specific test focuses on the scenario where the `slug` parameter is empty.

### Analysis
The test `CTC03 - Get Comments by Post Slug (Error - Empty slug parameter)` verifies whether the API returns the correct HTTP status code and error message when an empty `slug` parameter is provided.

**Input:**
Empty `slug` parameter (no value provided)

**Expected:**
- Status code: 400 Bad Request
- Response body: "Slug parameter must not be empty"

**Result:**
- The test failed (indicated by the status "Fail"). This means the API did not return the expected status code and/or error message when an empty `slug` parameter was provided.
- Instead, the API returned a status code of 200 OK and an empty comments array (`"comments": []`).

### Conclusion
- The test case failed, indicating that the API might not be handling empty `slug` parameters correctly. It's necessary to investigate the cause of the failure to ensure the API validates the input and returns the appropriate status codes and error messages for different scenarios. 
- This failed test case suggests that the API might be vulnerable to unexpected behavior or security issues when empty parameters are provided. 

## Test: [CTC04 - Get Comments by Post Slug (Error - Missing slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 400 and a correct message.

### Description
This is a test case for an API that retrieves comments for a post. The specific test focuses on the scenario where the `slug` parameter is missing.

### Analysis
The test `CTC04 - Get Comments by Post Slug (Error - Missing slug parameter)` verifies whether the API returns the correct HTTP status code and appropriate error message when the `slug` parameter is missing.

**Input:**
- Absence of the `slug` parameter

**Expected:**
- Status code: 400 Bad Request
- Response body: "Slug parameter must be provided"

**Result:**
- The test failed (indicated by the status "Fail"). This means that the API did not return the expected status code and/or error message when the `slug` parameter was missing.
- Instead, the API returned a 500 Internal Server Error status code and the generic message "An unexpected error occurred."

### Conclusion
- The test case failed, indicating that the API is not handling the missing `slug` parameter correctly. The API should return a 400 Bad Request status code with a specific error message informing about the missing mandatory parameter.
- The current 500 Internal Server Error response suggests a more serious issue on the server, possibly an unhandled error or an uncaught exception. It is necessary to investigate the cause of the internal server error to fix the problem.

## Test: [CTC05 - Get Comments by Post Slug (Error - invalid token)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 401 and a correct message.

### Description
This is a test case for an API that retrieves comments for a post. This specific test focuses on the scenario where the authentication token is invalid.

### Analysis
The test `CTC05 - Get Comments by Post Slug (Error - invalid token)` verifies whether the API returns the correct HTTP status code and appropriate error message when an invalid token is used.

**Input:**
Invalid authentication token

**Expected:**
- Status code: 401 Unauthorized
- Response body: "User authentication required"

**Result:**
- The test failed (indicated by the status "Fail"). This means that the API did not return the expected status code and/or error message when an invalid token was used.
- Instead, the API returned a 403 Forbidden status code and the message "Token signature expired."

### Conclusion
- The test case failed, indicating that the API is not handling invalid tokens correctly. The API should return a 401 Unauthorized status code with an error message informing about the need for user authentication.
- The current 403 Forbidden response suggests a specific issue with the token, possibly related to its expiration or invalidity. It is necessary to investigate the cause of the 403 error to fix the problem.

## Test: [CTC06 - Reply To Post (success - comment length >= 20 <= 10000)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 200 ("OK").

### Description
This is a test case for an API that creates a reply to a post. The test verifies that a reply is created successfully when the submitted comment has a length between 20 and 10000 characters.

### Analysis
The test `Reply To Post (success - comment length >= 20 <= 10000)` checks whether the API returns the correct HTTP status code and expected response message when a comment with a valid length is submitted.

**Input:**
A comment with a length between 20 and 10000 characters.

**Expected:**
- Status code: 200 OK
- Response body: "OK"

**Result:**
The test passed (indicated by the status "Pass"). This means that the API returned the expected status code and response message when a comment with a valid length was submitted.

### Conclusion
The test case was successful, indicating that the API is functioning correctly to create a post reply when the comment length is within the specified limits.

## Test: [CTC07 - Reply To Post (success - comment length = 20 chars)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
Should return status 200 ("OK").

### Description
This is a test case for an API that creates a reply to a post. The test verifies that a reply is created successfully when the submitted comment has exactly 20 characters.

### Analysis
The test CTC07 - Reply To Post (success - comment length = 20 chars) checks whether the API returns the correct HTTP status code and expected response message when a comment with exactly 20 characters is submitted.

**Input:**
A comment with exactly 20 characters.

**Expected:**
- Status code: 200 OK
- Response body: "OK"

### Result:
The test passed. This means that the API returned the expected status code and response message when a comment with exactly 20 characters was submitted.

### Conclusion
The test case was successful, indicating that the API is functioning correctly to create a post reply when the comment length is exactly 20 characters.

## Test: [CTC08 - Reply To Post (Reply To Post (success - comment length = 10000 chars)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 200 ("OK").

### Description

This is a test case for an API that creates a reply to a post. The test verifies that a reply is created successfully when the submitted comment has exactly 10000 characters.

### Analysis

The test `CTC08 - Reply To Post (success - comment length = 10000 chars)` checks whether the API returns the correct HTTP status code and expected response message when a comment with exactly 10000 characters is submitted.

**Input:**
A comment with exactly 10000 characters.

**Expected:**
- Status code: 200 OK
- Response body: "OK"

**Result:**
The test passed (indicated by the status "Pass"). This means that the API returned the expected status code and response message when a comment with exactly 10000 characters was submitted.

**Conclusion**
The test case was successful, indicating that the API is functioning correctly to create a post reply when the comment length is exactly 10000 characters.

## Test: [CTC09 - Reply To Post (Error - comment length < 20 chars)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 400 and a correct message.

### Description

This is a test case for an API that creates a reply to a post. The test verifies that the API returns the correct status code and error message when the submitted comment has less than 20 characters.

### Analysis

The test `CTC09 - Reply To Post (Error - comment length < 20 chars)` checks whether the API returns the correct HTTP status code and appropriate error message when a comment with less than 20 characters is submitted.

**Input:**
A comment with less than 20 characters.

**Expected:**
- Status code: 400 Bad Request
- Response body: "Comment length >= 20 <= 10000"

**Result:**
- The test failed (indicated by the status "Fail"). This means that the API did not return the expected status code and/or error message when a comment with less than 20 characters was submitted.
- Instead, the API returned a status code of 200 OK and a response body of "OK", indicating that the comment was created successfully, which is unexpected and incorrect.

### Conclusion
The test case failed, indicating that the API is not handling comments with less than 20 characters correctly. The API should return a 400 Bad Request status code with a specific error message stating that the comment length must be between 20 and 10000 characters.

## Test: [CTC010 - Reply To Post (Error - comment length > 10000)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 400 and a correct message.

### Description
This is a test case for an API that creates a reply to a post. The test verifies that the API returns the correct status code and error message when the submitted comment has more than 10000 characters.

### Analysis
The test `CTC010 - Reply To Post (Error - comment length > 10000)` checks whether the API returns the correct HTTP status code and appropriate error message when a comment with more than 10000 characters is submitted.

**Input:**
A comment with more than 10000 characters.

**Expected:**
- Status code: 400 Bad Request
- Response body: "Comment length >= 20 <= 10000"

**Result:**
- The test failed (indicated by the status "Fail"). This means that the API did not return the expected status code and/or error message when a comment with more than 10000 characters was submitted.
- Instead, the API returned a status code of 500 Internal Server Error and the error message "TypeError: Cannot read properties of undefined (reading 'toString')".

### Conclusion
- The test case failed, indicating that the API is not handling comments with more than 10000 characters correctly. The API should return a 400 Bad Request status code with a specific error message stating that the comment length must be between 20 and 10000 characters.
- However, the current 500 Internal Server Error response and specific error message indicate a more severe issue on the server, possibly a programming error or an unhandled exception. The internal server error needs to be investigated to fix the underlying problem.

## Test: [CTC011 - Reply To Post (Error - missing comment)] (../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 400 and a correct message.

### Description
This is a test case for an API that creates a reply to a post. The test verifies that the API returns the correct status code and error message when the "comment" parameter is missing.

### Analysis
The test `CTC011 - Reply To Post (Error - missing comment)` checks whether the API returns the correct HTTP status code and appropriate error message when the "comment" parameter is not provided.

**Input:**
- Absence of the "comment" parameter.

**Expected:**
- Status code: 400 Bad Request
- Response body: "Comment length >= 20 <= 10000"

**Result:**
-The test failed (indicated by the status "Fail"). This means that the API did not return the expected status code and/or error message when the "comment" parameter was missing.
-Instead, the API returned a status code of 500 Internal Server Error and the error message "TypeError: Cannot read properties of undefined (reading 'toString')".

### Conclusion
- The test case failed, indicating that the API is not handling the missing "comment" parameter correctly. The API should return a 400 Bad Request status code with a specific error message stating that the "comment" parameter is required.
- However, the current 500 Internal Server Error response and specific error message indicate a more severe issue on the server, possibly a programming error or an unhandled exception. The internal server error needs to be investigated to fix the underlying problem.









