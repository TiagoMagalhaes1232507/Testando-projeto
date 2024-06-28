# REST API Endpoint : /api/v1/users

## 1- Request: POST / Create User
### URI
    api/v1/users/

### HTTP method
    POST

### Description
    Used to create a new User in the system. The API should provide message informing that the account was already created.

### Headers

### Body
{username: string;
email: string;
password: string }

## Response
### Status
A - 200 - OK
B - 409 - Conflict
C - 409 - Conflict
D - 500 - Internal Server Error

### Body
A - message: `OK`
B - message: `The email ${email} associated for this account already exists`
c - message: `The username ${username} was already taken`
D - message: `TypeError: Cannot read properties of undefined (reading 'toString')`

## Relate the REST API endpoints with User Stories
| US 001 | [User Registration](../../us001/Readme.md)|
________________________________________________________________________________________

## 2- Request: GET / Get current user

### URI
api/v1/users/me

### HTTP method
Get

### Description
    User uses this to find it's user account.

### Headers
Authentication:
        accessToken: JWTToken;
        refreshToken: RefreshToken

### Body

## Response
### Status
A - 200 - OK
B - 403 - Forbidden

### Body
A - {    "user": {
        "username": "string",
        "isEmailVerified": "boolean" ,
        "isAdminUser": "boolean",
        "isDeleted": "boolean"
    }}
B - message: `No access token provided`

## Relate the REST API endpoints with User Stories
| US 002 | [To login in System](../../us002/Readme.md) |
___________________________________________________________________________________________________________________________________

## 3- Request: POST / Login

### URI
api/v1/users/login

### HTTP method
Post

### Description
        Used to login in the forum.

### Headers
Authentication:
        accessToken: JWTToken;

### Body
{ username: string;
password: string }

## Response
### Status
A - 200 - OK

### Body
A - message: `OK`

## Relate the REST API endpoints with User Stories
| US 002 | [To login in System](../../us002/Readme.md) |_____________________________________________________________________________________________

## 4- Request: POST / Logout 

### URI

api/v1/users/logout

### HTTP method

Post

### Description
        Used to logout the account. 

### Headers
Authentication:
        accessToken: JWTToken;

### Body
## Response
### Status
A - 200 - OK
B - 403 - Forbidden

### Body
A - message: `OK`
B - message: `No access token provided`

## Relate the REST API endpoints with User Stories
| US 011 | [To logout](../../us011/readme.md)          |
_____________________________________________________________________________________________

## 5- Request: POST / Refresh token

### URI
api/v1/users//token/refresh

### HTTP method
Post

### Description
    User must refresh token when access token expires

### Headers

### Body
{
  refreshToken: RefreshToken;
}

## Response

### Status
A - 200 - Ok
B - 404 - Not found

### Body
A - message: `OK`
B - message: `Refresh token doesn't exist`
B - message: `User not found or doesn't exist anymore´

## Relate the REST API endpoints with User Stories
| US 002 | [To login in System](../../us002/Readme.md) |
_____________________________________________________________________________________________

## 6- Request: DELETE / Delete user

### URI
    api/v1/users/:userId

### HTTP method
    DELETE

### Description
    Used to delete a user by Id.
### Headers


### Body
{
  userId: string;
}
## Response

### Status
 
    B - 404 - Not Found
    
## Relate the REST API endpoints with User Stories
    The `api/v1/users/:userId´(DELETE) endpoint is unrelated to any user stories documented in Sprint01. 


________________________________________________________________________________________


## 7- Request: GET / Get user by name
### URI
    api/v1/users/":username"

### HTTP method
    GET

### Headers
    Authentication:
        accessToken: JWTToken;
    
### Body
{ username: string }

## Response
### Status
A - 200 - OK
B - 500 - Internal Server Error
C - 403 - Forbidden

### Body
A - message: `OK`
B - message: `An unexpecter error occurred`
C - message: `No access token provided`

## Relate the REST API endpoints with User Stories

The api/v1/users/":username" (GET) endpoint is unrelated to any user stories documented in Sprint01.