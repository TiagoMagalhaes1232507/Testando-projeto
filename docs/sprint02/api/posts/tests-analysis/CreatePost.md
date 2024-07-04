# Test Cases and Analysis : 
## Create post endpoint: api/v1/posts/

## Test: [CTP09 -Create post with invalid text length (less than 20 characters) should return status 400](../../../../../src/automated-tests/posts/posts-tests.spec.ts): 

## Status:  
FAIL

### Description: 
This test checks if the text post length returns a 400 status for the body text lenght with less than 20 characters


### Analysis: 
In the body text 2 characters are put, and the status of 400 is expected.
However the test fails and apresents the message that the status should be 200.

### Conclusion: 
The title lenght functionality did not work as expected, possibly due to a failure in the API to correctly. This needs further investigation to ensure that the endpoint correctly processes the request.

## CTP05 -Create text post with invalid title length (less than 2 characters) should return status 400 
## CTP06-Create text post with invalid title length (more than 85 characters) should return status 400 
## CTP07 -Create link post with invalid title length (less than 2 characters) should return status 400 
## CTP08-Create link post with invalid title length (more than 85 characters) should return status 400 
## CTP10- Create post with invalid link length (less than 8 characters) should return status 400 
## CTP11- Create post with invalid link length(more than 500) should return status 400 
## CTP12 -Create post with invalid text length (more than 10000) should return status 400 
## CTP13- Missing posttype on post postshould return status 400 
## CTP14- Missing title should return status 400 
## CTP15- Missing title on link post should return status 400 
## CTP16 -Missing text should return status 400 
## CTP17 -Missing link should return status 400 
## CTP18 -Missing body should return status 400 


## Status:  
FAIL

### Description: 
This tests checks if the status 400 expected, should pass

### Analysis: 
In all of this test the error tipes are should be status of 400 Bad Request, however the tests fails and the status presented is 500.
500 Internal Server Error
This error should not appear because it is an uncontrolled application error (Runtime Error).

### Conclusion: 
This is possibly due to a failure in the API to correctly. This needs further investigation to ensure that the endpoint correctly processes the request.

## CTP21 - Should return 401 if doesnt have accesstoken

## Status:  
FAIL

### Description: 
This tests checks if without the access token the status expected is 401 Unauthorized

### Analysis: 
In this test the error status should be 401 Unauthorized, however the tests fails and the status received is 403 - Forbiden

### Conclusion: 
This is possibly due to a failure in the API to correctly. This needs further investigation to ensure that the endpoint correctly processes the request.