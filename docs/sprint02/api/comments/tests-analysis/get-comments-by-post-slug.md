# Test Cases and Analysis : 

## Get Comments by Post Slug endpoint: /api/v1/comments/?{slug} (Get)

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


