# Tests Cases and Analysis: 

## Get Comment by CommentId

### Test  [CTP034 - Get Comment by CommentId should return status 400 for an empty comment ID](../../../../../src/automated-tests/comments/comments-tests.spec.ts): 

It should return status 400 for an empty commentID.

### Expected response:
    - Status: 400 (Bad request)
    - Body: "Comment Id parameter must not be empty" / message suggestion 
    

### Received response
    - Status: 500 (Internal Sever Error)
    - Body: message: `An unexpected error occurred.`
   


### Status:
FAIL

### Description:
This test checks if the endpoint returns status 400 when an empty commentID is provided.

### Analysis:
The response returns status 500 with the message "An unexpected error occurred", indicating that the API recognized a server error but not a bad request.

### Conclusion:
The validation for empty commentIDs is not working as expected.