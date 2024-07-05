# Tests Cases and Analysis: 

## Upvote Comment

### Test  [CTC038 - Upvote Comment should return status 401 as it is empty token](../../../../../src/automated-tests/comments/comments-tests.spec.ts): 

Should return 401 status for an empty token.

### Expected response:
    - Status: 401 (Unauthorized)
    - Body: "Token parameter must not be empty" / message suggestion 
    

### Received response
    - Status: 500 (Internal Sever Error)
    - Body: message: `An unexpected error occurred.`
   


### Status:
FAIL

### Description:
This test checks if the upvote endpoint returns 401 status when the token is empty.

### Analysis:
The response returned a status 500 with a message "An unexpected error occurred", indicating that the API detected a server error instead have treated it as an unauthorized request.

### Conclusion:
Empty token validation is not working as expected. The API should return a status 401 with a corresponding message when the token is empty.


### Test  [CTC039 - Upvote Comment should return status 401 for expired token](../../../../../src/automated-tests/comments/comments-tests.spec.ts): 

Should return status 401 for expired token.

### Expected response:
    - Status: 401 (Unauthorized)
    - Body: "Token is expired or invalid. Please log in again."
    

### Received response
    - Status: 403 (Forbidden)
    - Body: message: "Token signature expired."
   


### Status:
FAIL

### Description:
This test checks whether the upvote endpoint returns status 401 when the token is expired or invalid.

### Analysis:
The response returns status 403 with a message “Token signature expired”, indicating that the API did not detect the request error as it should. A 401 Unauthorized response should be used for incorrect authentication, and a 403 Forbidden response should be used when the user is authenticated but not authorized to perform the requested operation on the given resource.

### Conclusion:
Expired token validation is not working as expected. The API must returns status 401 with a corresponding message when the token is expired or invalid.







