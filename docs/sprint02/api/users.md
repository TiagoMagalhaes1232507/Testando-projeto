# REST API Endpoint : /api/v1/users

## Request: Post /
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
  email": string;
  password: string
}
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

________________________________________________________________________________________________________________
# REST API Endpoint : /api/v1/users

## Request: get /
### URI
    api/v1/users/:username --> getUserByUserName
### HTTP method
    Get
### Headers
    Authorization: Token
### Body
{
  username: string
}
## Response
### Status
A - 200 - OK
B - 403 - Forbidden
C - 409 - Conflict
D - 500 - Internal Server Error
### Body
A - message: `OK`
B - message: `The email ${email} associated for this account already exists`
c - message: `The username ${username} was already taken`
D - message: `TypeError: Cannot read properties of undefined (reading 'toString')`
________________________________________________________________________________________________________________

## Request: post /
### URI
        
### HTTP method
    
### Headers
    
### Body

## Response
### Status
### Body

## Request: post /




## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md)|

__________________________________________________________
