# REST API Endpoint : /api/v1/members

## 1 - Request: get /me   &&& não estou a conseguir fazer este ***
### URI
    api/v1/members/
    
### HTTP method
    GET

### Description
This endpoint retrieves


### Headers
Autorization: token
    
### Body
The body for a HTTP GET request should be empty.

### Response
#### Status
* A - 
* B - 500 - Internal Server Error


#### Body

## Relate the REST API endpoints with User Stories


## 2 - Request: get /:username
### URI
api/v1/members/
    
### HTTP method
GET

### Headers

### Description
Um membro é um utilizador que está registado e consegue ver os posts (?!)
    
### Body
The body for a HTTP GET request should be empty.

## Response
### Status
* A - 200 - OK
* B - 404 - Not Found (if member doesn't exist)

### Body
`A - 200 OK`

{
    member: {
        reputation: 0,
        user: {
            username: zzz
        }
    }
}

`B - 404 NOT FOUND`

 {message:Couldn't find a member with the username aaa}


## Relate the REST API endpoints with User Stories
Create a post?