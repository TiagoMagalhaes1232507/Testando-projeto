# REST API Endpoint : /api/v1/users

## Request: Post /

### URI
    api/v1/users/
    
### HTTP method
    Post

 ### Description ???????????????????????????????
    Used to create a new User in the system. The API should provide message informing that the account was already created.

### Headers
 { "username" : "tiago",
"email" : "tiago@gmail.com",
"password" : "12345678" } 

### Body
{
    "OK"
}
## Response
"OK"
### Status
200 - OK

### Body
    curl --location 'http://localhost:5001/api/v1/users/' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "username" : "tiago",
        "email" : "tiago@gmail.com",
        "password" : "12345678" }'


## Request: post /


## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md) |
| US 002 | [To login in System](../../us002/Readme.md) |
| US 004 | [Create a discussion](../../us004/Readme.md)          |
| US 005 | [Create a comment](../../us005/Readme.md)          |
| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)          |
| US 007 | [Post with a link](../../us007/readme.md)          |
| US 008 | [To vote on a Discussion](../../us008/readme.md)          |
| US 011 | [To logout](../../us011/readme.md)          |
__________________________________________________________________________________________________________________________________________________________________________________________________
### URI
    api/v1/users/
    
### HTTP method
    Post

### Description
    Used to create a new User in the system. The API should handle creating the User based on the provided data and return a successful response.

### Headers
?

### Body
{
"username" : "magalhaes",
"email" : "magalhaes@gmail.com",
"password" : "12345678"
}


## Response
"The email magalhaes@gmail.com associated for this account already exists"

### Status
error 409 - Conflict

### Body
{
    "message": "The email magalhaes@gmail.com associated for this account already exists"
}

## Request: post /
??

## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md) |
| US 002 | [To login in System](../../us002/Readme.md) |
| US 004 | [Create a discussion](../../us004/Readme.md)          |
| US 005 | [Create a comment](../../us005/Readme.md)          |
| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)          |
| US 007 | [Post with a link](../../us007/readme.md)          |
| US 008 | [To vote on a Discussion](../../us008/readme.md)          |
| US 011 | [To logout](../../us011/readme.md)          |
__________________________________________________________________________________________________________________________________________________________________________________________________

### URI
    api/v1/users/
    
### HTTP method
    Get

### Description
    Used to create a new User in the system. The API should handle creating the User based on the provided data and return a successful response.

### Headers
?

### Body
{
"username" : "magalhaes",
"email" : "magalhaes@gmail.com",
"password" : "12345678"
}


## Response
"The email magalhaes@gmail.com associated for this account already exists"

### Status
error 409 - Conflict

### Body
{
    "message": "The email magalhaes@gmail.com associated for this account already exists"
}

## Request: post /
??

## Relate the REST API endpoints with User Stories

| US 001 | [User Registration](../../us001/Readme.md) |
| US 002 | [To login in System](../../us002/Readme.md) |
| US 004 | [Create a discussion](../../us004/Readme.md)          |
| US 005 | [Create a comment](../../us005/Readme.md)          |
| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)          |
| US 007 | [Post with a link](../../us007/readme.md)          |
| US 008 | [To vote on a Discussion](../../us008/readme.md)          |
| US 011 | [To logout](../../us011/readme.md)          |