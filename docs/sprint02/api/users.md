# REST API Endpoint : /api/v1/users

## 1- Request: POST /

### URI

    api/v1/users/

### HTTP method

    POST

### Description
    Used to create a new User in the system. The API should provide message informing that the account was already created.

### Headers

### Body
{
username: string;
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
_____________________________________________________________________________________________

## 2- Request: GET / 

### URI

api/v1/users/me

### HTTP method

Get

### Description
    User uses this to find it's user account.

### Headers



### Body



## Response
### Status

A - 200 - OK

### Body

{    "user": {
        "username": "string",
        "isEmailVerified": false,
        "isAdminUser": false,
        "isDeleted": false
    }
}

## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md)|
_____________________________________________________________________________________________

## 3- Request: POST /

### URI

api/v1/users/login

### HTTP method

Post

### Description
    
    Used to login in the forum.

### Headers

Authentication:
        accessToken: JWTToken;
        refreshToken: RefreshToken

### Body

{ username: string;
password: string }

## Response
### Status
A - 200 - OK
### Body
A - message: `OK`

_____________________________________________________________________________________________

## 4- Request: POST /

### URI

api/v1/users/logout

### HTTP method

Post

### Description
    
    Used to logout the account.

### Headers

Authentication:
        accessToken: JWTToken;
        refreshToken: RefreshToken

### Body

## Response
### Status

A - 200 - OK

### Body

A - message: `OK`
_____________________________________________________________________________________________
(JOAO PEDRO)
## 5- Request: POST /

### URI

### HTTP method

### Headers

### Body

## Response
### Status

### Body
_____________________________________________________________________________________________
(JOAO PEDRO)
## 6- Request: DELETE /

### URI

### HTTP method

### Headers

### Body

## Response
### Status

### Body

________________________________________________________________________________________________

## 7- Request: GET /
### URI
    api/v1/users/":username" --> getUserByUserName
### HTTP method
    Get

### Description
    Used to find a User in the system. 

### Headers
    Authentication:
        accessToken: JWTToken;
        refreshToken: RefreshToken
### Body
{ username: string }
## Response
### Status
A - 200 - OK
### Body

A - message: `OK`

______________________________________________________________________________________
## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md)|