# Test Cases and Analysis : 
## Get Comments by Post Slug endpoint: /api/v1/comments/?{slug}

## Test: [CTC01 - Get Comments by Post Slug (success - Valid slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 200 and a array of comments objects.

### Expected/Received response:
    - Status: 200 OK
    - Body Message: array of comments objects

### Status:  
Pass

### Description:

This is a test case for an API endpoint that retrieves comments associated with a specific post. The endpoint is /api/v1/comments/?{slug} and expects a slug parameter as part of the URL path.

### Analysis:

The test case, named CTC01 - Get Comments by Post Slug (success - Valid slug parameter), focuses on a successful scenario. It verifies that the endpoint returns the expected response when a valid slug parameter is provided.

The expected behavior includes:

Status code: 200 OK, indicating a successful request.
Response body: An array of comment objects containing information about the comments associated with the provided post slug.

### Conclusion:

The test case has passed, signifying that the API endpoint functions correctly when a valid slug parameter is used to retrieve comments. This confirms the basic functionality of the endpoint for retrieving comments associated with a post.

# Test Cases and Analysis : 
## Get Comments by Post Slug endpoint: /api/v1/comments/?{slug}

## Test: [CTC02 - Get Comments by Post Slug (Error - Invalid slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 200 and a array of comments objects.

### Expected response:
  - status: 404 Not Found
  - body:"Couldn't find a post by slug {${slug}}"

### Expected response:
  - status: 200 OK
  - body: "comments": []
    
### Status:  
Fail

### Description:

This is a test case for an API endpoint that retrieves comments associated with a specific post. The endpoint is /api/v1/comments/?{slug} and expects a slug parameter as part of the URL path.

### Analysis:

The test case, named CTC01 - Get Comments by Post Slug (success - Valid slug parameter), focuses on a successful scenario. It verifies that the endpoint returns the expected response when a valid slug parameter is provided.

The expected behavior includes:

Status code: 200 OK, indicating a successful request.
Response body: An array of comment objects containing information about the comments associated with the provided post slug.

### Conclusion:

The test case has passed, signifying that the API endpoint functions correctly when a valid slug parameter is used to retrieve comments. This confirms the basic functionality of the endpoint for retrieving comments associated with a post.

## Test: [CTC02 - Get Comments by Post Slug (Error - Invalid slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 404 and a correct message.

### Expected response:
  - status: 404 Not Found
  - body:"Couldn't find a post by slug {${slug}}"

### Received response:
  - status: 200 OK
  - body: "comments": []
    
### Status:  
Fail

## Description

This is a test case for an API that retrieves comments for a post. The test focuses on the scenario where the provided `slug` parameter is invalid.

## Analysis

The test `CTC02 - Get Comments by Post Slug (Error - Invalid slug parameter)` verifies whether the API returns the correct HTTP status code and appropriate error message when an invalid slug is provided.

* **Input:**
    * Invalid `slug` parameter
* **Expected:**
    * Status code: 404 Not Found
    * Response body: "Couldn't find a post by slug {${slug}}" (where `{$slug}` represents the provided invalid slug)
* **Result:**
    * The test failed. This means the API did not return the expected status code and/or error message when an invalid slug was provided.

## Possible reasons for the test failure:

* The API might be returning a different status code than 404 for invalid slugs.
* The API might be returning a different error message than the expected one.
* The test code might be incorrect and not sending the invalid `slug` parameter properly.

## Conclusion

The test case failed, indicating that the API might not be handling invalid slugs correctly. It's necessary to investigate the cause of the failure to ensure the API returns the appropriate status codes and error messages for different scenarios.

## Test: [CTC03 - Get Comments by Post Slug (Error - Empty slug parameter)](../../../../../src/automated-tests/comments/comments-tests2.spec.ts): 
should return status 400 and a correct message.

### Expected response:
  - status: 400 Bad Request
  - body: "Slug parameter must not be empty"

### Received response:
  - status: 200 OK
  - body: "comments": []
    
### Status:  
Fail

## Description

The text describes a test case for an API that retrieves comments for a post. This specific test focuses on the scenario where the `slug` parameter is empty.

## Analysis

The test `CTC03 - Get Comments by Post Slug (Error - Empty slug parameter)` verifies whether the API returns the correct HTTP status code and error message when an empty `slug` parameter is provided.

* **Input:**
    * Empty `slug` parameter (no value provided)
* **Expected:**
    * Status code: 400 Bad Request
    * Response body: "Slug parameter must not be empty"
* **Result:**
    * The test failed (indicated by the status "Fail"). This means the API did not return the expected status code and/or error message when an empty `slug` parameter was provided.
    * Instead, the API returned a status code of 200 OK and an empty comments array (`"comments": []`).

## Possible reasons for the test failure:

* The API might not be properly validating the `slug` parameter and is allowing empty values.
* The API code responsible for handling empty slugs might be returning an incorrect status code and message.
* The test code itself might have an issue and not be sending an empty `slug` parameter correctly.

## Conclusion

The test case failed, indicating that the API might not be handling empty `slug` parameters correctly. It's necessary to investigate the cause of the failure to ensure the API validates the input and returns the appropriate status codes and error messages for different scenarios. 

This failed test case suggests that the API might be vulnerable to unexpected behavior or security issues when empty parameters are provided. 

