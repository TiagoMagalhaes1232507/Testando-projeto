# US 007 - Post with a Link

## 1. Tests 

### 1.1. Check Required Fields Validation

**Test 1:** Check that it is not possible to submit a post without filling in all required fields (title and link) - AC1.

### 1.2. Check Title Length Validation

**Test 2:** Check that it is not possible to submit a post with a title containing less than 2 characters - AC2.

**Test 3:** Check that it is not possible to submit a post with a title containing more than 85 characters - AC2.

### 1.3. Check Link Length Validation

**Test 4:** Check that it is not possible to submit a post with a link containing less than 8 characters - AC3.

**Test 5:** Check that it is not possible to submit a post with a link containing more than 500 characters - AC3.

### 1.4. Check Link Format Validation

**Test 6:** Check that it is not possible to submit a post with an invalid link format (not starting with HTTP, HTTPS, or FTP) - AC4.

### 1.5. Dependencies Testing

**Test 7:** Check that only registered users can submit posts - Dependency on "US001 User Registration".

**Test 8:** Check that only logged users can submit posts - Dependency on "US002 To login in System".







