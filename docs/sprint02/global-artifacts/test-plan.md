# Micro Test Plan

## Context of the Project

The project is a forum application designed to facilitate discussions among users. The main features include user registration, login, viewing discussions, creating posts and comments, replying to comments, voting on discussions, and viewing discussions sorted by popularity and date. The current sprint focuses on implementing and testing all endpoints and functionalities, ensuring that the API for users, members, posts, and comments is robust, secure, and performs as expected.

## Implementation of Automated Tests

### Tools and Frameworks
* **Testing Framework**: Jest
* **HTTP Assertions**: Supertest

### Test Strategy
* **Blackbox Test Techniques**: Equivalence class partitioning, boundary value analysis
* **Test Coverage**: Overall scenarios, including edge cases

### Endpoints to Test

#### Users
- **POST /users**
  - Create a new user
- **GET /users/me**
  - Get current user details
- **POST /users/login**
  - Login user
- **POST /users/logout**
  - Logout user
- **POST /users/token/refresh**
  - Refresh access token
- **DELETE /users/:userId**
  - Delete user
- **GET /users/:username**
  - Get user by username

#### Members
- **GET /members/me**
  - Get current member details
- **GET /members/:username**
  - Get member by username

#### Posts
- **POST /posts**
  - Create a new post
- **GET /posts/recent**
  - Get recent posts
- **GET /posts/popular**
  - Get popular posts
- **GET /posts**
  - Get post by slug
- **POST /posts/upvote**
  - Upvote a post
- **POST /posts/downvote**
  - Downvote a post

#### Comments
- **GET /comments**
  - Get comments by post slug
- **POST /comments**
  - Reply to a post
- **POST /comments/:commentId/reply**
  - Reply to a comment
- **GET /comments/:commentId**
  - Get comment by ID
- **POST /comments/:commentId/upvote**
  - Upvote a comment
- **POST /comments/:commentId/downvote**
  - Downvote a comment

### Test Techniques
- **Equivalence Classes**: Identify and test representative values from each class.
- **Boundary Values**: Identify and test values at the boundaries of equivalence classes.

## Test Plan Objectives

The main objective of this test plan is to ensure comprehensive test coverage of the forum application's API endpoints for users, members, posts, and comments. By using blackbox test techniques such as equivalence class partitioning and boundary value analysis, we aim to cover a wide range of scenarios and edge cases to verify the robustness and reliability of the API.

### Justification for Blackbox Testing

Blackbox testing focuses on validating the functionality of the application without considering the internal code structure. This approach is particularly useful for testing API endpoints because it ensures that the system behaves as expected from an end-user perspective. By focusing on input and output, we can effectively identify any discrepancies or unexpected behavior in the API responses.

### Creating the Test Cases

1. **Identify Equivalence Classes**: Determine valid and invalid input data ranges for each endpoint and create test cases that represent each class.

    **Example**: For the `POST /users` endpoint, equivalence classes might include:
    - Valid user data (e.g., unique username, valid email format, strong password)
    - Invalid user data (e.g., duplicate username, invalid email format, weak password)

    **Practical Example**: 
    - Test creating a user with a unique username, valid email, and a strong password to ensure it succeeds.
    - Test creating a user with a duplicate username to ensure it fails and returns an appropriate error message.

2. **Determine Boundary Values**: Identify the edge values for the input data and create test cases that test these boundaries.

    **Example**: For the `POST /users` endpoint, boundary values might include:
    - Minimum and maximum lengths for username and password

    **Practical Example**: 
    - Test creating a user with a username at the minimum length limit (e.g., 3 characters) to ensure it succeeds.
    - Test creating a user with a password just above the maximum length limit (e.g., 51 characters) to ensure it fails and returns an appropriate error message.

3. **Develop Test Scenarios**: For each endpoint, develop a set of test scenarios that cover the main functionalities, edge cases, and potential error conditions.

    **Example**: For the `POST /posts/upvote` endpoint:
    - Valid upvote (user upvotes a post)
    - Invalid upvote (user tries to upvote a post that doesn't exist)
    - User tries to upvote the same post twice

    **Practical Example**: 
    - Test upvoting an existing post to ensure it succeeds and the post's vote count increases.
    - Test upvoting a non-existent post to ensure it fails and returns a 404 error.
    - Test upvoting the same post twice to ensure it fails and returns an appropriate error message indicating the post has already been upvoted.

4. **Automate Tests Using Supertest**: Implement the test scenarios using the Supertest package to automate the process of sending HTTP requests and verifying the responses.

    **Practical Example**: 
    - Automate the process of creating a user, logging in, and then upvoting a post by sending HTTP requests and verifying the responses using Supertest.
    - Validate that the responses meet the expected outcomes and log any discrepancies for further investigation.

5. **Execute and Validate**: Run the tests and validate that the API responses meet the expected outcomes. Any discrepancies will be logged and addressed to ensure the API functions correctly.

    **Practical Example**: 
    - Execute the automated tests and review the results to ensure all test cases pass.
    - Investigate and resolve any failed test cases by identifying the root cause and making necessary adjustments to the code or test cases.

6. **Conclusions**:

To develop our integration tests, we used the black-box technique, focusing on equivalence classes and boundary values. The tests covered a variety of scenarios relevant to the functionality of responding to endpoints, including valid, minimum, and maximum allowed lengths, as well as invalid lengths, both below and above the allowed limits. 
Tests were also conducted for both success and failure scenarios, including the validation of mandatory parameters and proper handling of authentication tokens.

In some cases, we had to implement a before-all setup to create a user, log in, create a post, and use the slug of that post to develop our tests. The integration tests showed that, in general, the API works as expected for most scenarios. However, we identified some failures in input validation and error handling. For instance, the API returns status 500 in some cases where status 400 would be more appropriate, indicating the need for more robust validations and improved error handling.

**General Recommendations**:

	•	Review and implement input validations: Ensure that all mandatory parameters are validated at the start of request processing, with clear and appropriate error messages.
	•	Improve error handling: Clearly differentiate between input validation errors and internal server errors to return the correct HTTP status codes.
	•	Integration tests: Add specific tests to validate inputs and tokens, ensuring that the API responds correctly to different error scenarios.
	•	Documentation: Update the API documentation to reflect the expected behaviors and corresponding error messages for different error cases.