# Test Cases and Analysis : 
## Create post endpoint: api/v1/posts/

## Test: [CTP28 Get popular post with optional offset should return status 400](../../../../../src/automated-tests/posts/posts-tests.spec.ts):


### Description: 
This test checks if parameter offset is working and the correct status is expected.


### Analysis: 
"/api/v1/posts/popular?offset=1"
and send it, it should retrieve the post in the postman, however it doesnt,  "message": "An unexpected error occurred."
The test error should be status of 400 Bad Request, however the tests fails and the status presented is 500.
By runing the supertest the same is verified ,the status of expected 400 fails and 500 is received.
500 Internal Server Error
This error should not appear because it is an uncontrolled application error (Runtime Error).

### Conclusion: 
The title lenght functionality did not work as expected, possibly due to a failure in the API to correctly. This needs further investigation to ensure that the endpoint correctly processes the request.