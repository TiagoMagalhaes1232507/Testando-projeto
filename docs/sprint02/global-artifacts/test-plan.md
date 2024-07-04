# Test Plan

## Test Plan Objectives

The main objective of this test plan is to ensure comprehensive test coverage of the forum application's API endpoints for users, members, posts, and comments. By using blackbox test techniques such as equivalence class partitioning and boundary value analysis, we aim to cover a wide range of scenarios and edge cases to verify the robustness and reliability of the API.

## Context of the Project

The project is a forum application designed to facilitate discussions among users. The main features include user registration, login, viewing discussions, creating posts and comments, replying to comments, voting on discussions, and viewing discussions sorted by popularity and date. The current sprint, the second iteration, focuses on implementing and testing all endpoints and functionalities, ensuring that the API for users, members, posts, and comments is robust, secure, and performs as expected.
objectivo
momento do proj

## Implementation of Automated Tests

### Tools and Frameworks
* **Testing Framework**: Jest
* **HTTP Assertions**: Supertest

### Test Strategy
* **Blackbox Test Techniques**: Equivalence class partitioning, boundary value analysis
* **Test Coverage**: Overall scenarios, including edge cases

### Endpoints to Test
|[Endpoints to Test](./endpoints.md)|

### Test Techniques
- **Equivalence Classes**: Identify and test representative values from each class.
- **Boundary Values**: Identify and test values at the boundaries of equivalence classes.

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