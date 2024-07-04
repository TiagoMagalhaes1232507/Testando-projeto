# Test Cases and Analysis : 
## Upvote post endpoint: api/v1/posts/upvote

## Test: [CTP020 - should increment points after upvote](../../../../../src/automated-tests/posts/upvote-tests.spec.ts): 
should return status 200 and increment points after upvote

## Expected response:
    - Status: 200
    - Body: OK
    - Points incremented

## Received response
    - Status: 200
    - Body: OK
    - Points not incremented

## Status:  
FAIL

### Description: 
This test checks if the upvote endpoint correctly increments the number of votes for a post.

### Analysis: 
The number of votes did not increase after the upvote action. This indicates a potential issue with the upvote functionality, possibly due to the upvote operation not being processed correctly by the API or an issue with the logic that updates the vote count in the database.

### Conclusion: 
The upvote functionality did not work as expected, possibly due to a failure in the API to correctly process the upvote request or update the vote count in the database. This needs further investigation to ensure that the upvote endpoint correctly processes the request.


## Test: [CTP021 - should update the voteByMe field after upvote](../../../../../src/automated-tests/posts/upvote-tests.spec.ts): 
should update the voteByMe field after upvote

## Expected response:
    - Status: 200
    - Body: OK
    - wasUpvotedByMe: true

## Received response
    - Status: 200
    - Body: OK
    - wasUpvotedByMe: false

## Status:  
FAIL

### Description: 
This test checks if the upvote endpoint correctly updates the "wasUpvotedByMe" field.

### Analysis: 
The "wasUpvotedByMe" field was not correctly updated, indicating that the API did not correctly identify that the user has upvoted the post.

### Conclusion: 
The wasUpvotedByMe field update functionality did not work as expected.


## Test: [CTP022 - should return status 403 for expired token](../../../../../src/automated-tests/posts/upvote-tests.spec.ts): 
should return status 403 for expired token

## Expected response:
- Status: 403
- Body: { "message": "Token signature expired." }


## Received response
- Status: 403
- Body: { "message": "Token signature expired." }

## Status:  
PASS

### Description: 
This test checks if the upvote endpoint correctly handles requests with an expired token.

### Analysis: 
The endpoint returned a 403 status with the message “Token signature expired,” indicating that the API correctly identified and rejected the expired token.

### Conclusion: 
The expired token handling works as expected.

### Recommendations: 
No immediate action needed for this specific test.


## Test: [CTP023 - should return status 404 for non-existent post](../../../../../src/automated-tests/posts/upvote-tests.spec.ts): 
should return status 404 for non-existent post

## Expected response:
    - Status: 404
    - Body: { "message": "Couldn't find a post by slug non-existent-slug." }


## Received response
    - Status: 404
    - Body: { "message": "Couldn't find a post by slug {non-existent-slug}." }

## Status:  
FAIL

### Description: 
This test checks if the upvote endpoint correctly handles requests for non-existent posts.

### Analysis: 
There is a discrepancy in the error message format. The expected message uses the actual slug value directly, while the received message includes the slug value within curly braces. This indicates a minor formatting issue in the response from the API.

### Conclusion: 
The error message formatting for the non-existent post needs to be corrected. The API response should match the expected format exactly, without extraneous characters like curly braces.

### Recommendations:
Correct Error Message Format: Adjust the API to return error messages in the expected format, or update the test to match the actual format used by the API.


## Test: [CTP024 - should return status 400 if userId is included in the request body](../../../../../src/automated-tests/posts/upvote-tests.spec.ts): 
should return status 400 if userId is included in the request body

## Expected response:
    - Status: 400
    - Body: { "message": ""userId" is not allowed" }

## Received response
    - Status: 200
    - Body: OK

## Status:  
FAIL

### Description: 
This test checks if the upvote endpoint correctly rejects requests that include a userId in the request body.

### Analysis: 
Allowing the userId to be accepted from the request body can pose security risks. Clients could potentially upvote on behalf of other users by specifying different userId values.

### Conclusion: 
The API correctly handles and rejects requests containing unexpected parameters like userId.

#### Recommendations:

#### Validation: 
Implement validation to reject requests containing unexpected parameters like userId in the request body.

#### Strictly Use Token-Derived userId: 
Ensure that the userId is always derived from the decoded token and not accepted from the request body.

#### Security Concerns
* Allowing userId to be accepted from the request body can pose security risks:
    * Clients could potentially upvote on behalf of other users by specifying different userId values.

#### Consistency and Data Integrity
* The userId should be consistently derived from the authenticated token:
    * Ensuring that actions are performed by the authenticated user. Accepting it from the request body can lead to inconsistencies and potential misuse.

#### Error Handling and Validation
* The API should validate the incoming request payload:
    * Ensuring it only includes expected parameters helps in maintaining a clean and predictable API contract.

#### Recommendations for API Improvement
* Validation:
    *Implement validation to reject requests containing unexpected parameters like userId in the request body.
* Strictly Use Token-Derived userId:
    Ensure that the userId is always derived from the decoded token and not accepted from the request body.


### Conclusion

#### Upvote Functionality:
* The upvote functionality did not work as expected, possibly due to a failure in the API to correctly process the upvote request or update the vote count in the database. This needs further investigation to ensure that the upvote endpoint correctly processes the request.

#### Error Message Formatting:
* The error message formatting for the non-existent post needs to be corrected. The API response should match the expected format exactly, without extraneous characters like curly braces.