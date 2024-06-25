# REST API Endpoint : /api/v1/users

<<<<<<< HEAD
## Request: Post /
=======
## Request: get /

>>>>>>> afcf1e70c48a583f55c4d282f03550870a49841c
### URI

    api/v1/users/

### HTTP method
<<<<<<< HEAD
    Post

### Description
    Used to create a new User in the system. The API should provide message informing that the account was already created.
=======

    Get
>>>>>>> afcf1e70c48a583f55c4d282f03550870a49841c

### Headers

### Body

{
<<<<<<< HEAD
  username: string;
  email": string;
  password: string
=======
username: string;
email": string;
password: string;
>>>>>>> afcf1e70c48a583f55c4d282f03550870a49841c
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

<<<<<<< HEAD
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
=======
---
>>>>>>> afcf1e70c48a583f55c4d282f03550870a49841c

## Request: post /

### URI

### HTTP method

### Headers

### Body

## Response

### Status

### Body

## Request: post /

<<<<<<< HEAD


=======
## Relate the REST API endpoints with User Stories
>>>>>>> afcf1e70c48a583f55c4d282f03550870a49841c

## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md)|
<<<<<<< HEAD

__________________________________________________________
=======
| US 002 | [To login in System](../../us002/Readme.md)|
| US 004 | [Create a discussion](../../us004/Readme.md)|
| US 005 | [Create a comment](../../us005/Readme.md)|
| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)|
| US 007 | [Post with a link](../../us007/readme.md)|
| US 008 | [To vote on a Discussion](../../us008/readme.md)|
| US 011 | [To logout](../../us011/readme.md)|

---
>>>>>>> afcf1e70c48a583f55c4d282f03550870a49841c
