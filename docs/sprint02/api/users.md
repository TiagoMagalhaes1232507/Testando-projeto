# REST API Endpoint : /api/v1/users

## Request: get /
### URI
    api/v1/users/
    
### HTTP method
    Get
### Headers
    
### Body
{
  username: string;
  email": string;
  password: string;
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




## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md)|
| US 002 | [To login in System](../../us002/Readme.md)|
| US 004 | [Create a discussion](../../us004/Readme.md)|
| US 005 | [Create a comment](../../us005/Readme.md)|
| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)|
| US 007 | [Post with a link](../../us007/readme.md)|
| US 008 | [To vote on a Discussion](../../us008/readme.md)|
| US 011 | [To logout](../../us011/readme.md)|
__________________________________________________________
