# REST API Endpoint : /api/v1/users

## 1- Request: POST /

### URI

    api/v1/users/

### HTTP method

    Post

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

username: string;

## Response
### Status

### Body
_____________________________________________________________________________________________

## 3- Request: POST /

### URI

api/v1/users/login

### HTTP method

Post

### Description
    
    Used to login in the forum.

### Headers

accessToken: JWTToken;
refreshToken: RefreshToken;

### Body

{ username: string;
password: string }

## Response
### Status

### Body
_____________________________________________________________________________________________

## 4- Request: POST /

### URI

api/v1/users/logout

### HTTP method

Post

### Headers

accessToken: JWTToken;
refreshToken: RefreshToken;

### Body



## Response
### Status

### Body
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
    api/v1/users/:username --> getUserByUserName
### HTTP method
    Get

### Description
    Used to find a User in the system. 

### Headers
    Authorization: Token
### Body
{
  username: string
}
## Response
### Status

### Body






______________________________________________________________________________________
## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md)|