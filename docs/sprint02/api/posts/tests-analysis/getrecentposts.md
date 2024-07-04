# Test Cases and Analysis : 
## Create post endpoint: api/v1/posts/

## Test:  CTP27 -Get recent post with optional offset should return status 400

## Status:  
FAIL

### Description: 
This test checks if the text post length returns a 400 status for the body text lenght with less than 20 characters


### Analysis: 
putting the uri = "/api/v1/posts/recent?offset=1"; and send it, it should retrieve the post in the postman, however it doesnt,  "message": "An unexpected error occurred."
The test error should be status of 400 Bad Request, however the tests fails and the status presented is 500.
By runing the supertest the same is verified ,the status of expected 400 fails and 500 is received.
500 Internal Server Error
This error should not appear because it is an uncontrolled application error (Runtime Error).


### Conclusion: 
The offset parameter did not work as expected, possibly due to a failure in the API to correctly. This needs further investigation to ensure that the endpoint correctly processes the request.