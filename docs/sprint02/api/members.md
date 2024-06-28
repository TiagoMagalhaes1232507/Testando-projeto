# REST API Endpoint : /api/v1/members

## 1 - Request: get /me
### URI
    api/v1/members/
    
### HTTP method
    GET

### Description
This endpoint should present information about members but it isn't responsive.


### Headers
Autorization token is not mandatory.
    
### Body
The body for a HTTP GET request should be empty.

### Response
#### Status
* A - 500 - Internal Server Error


#### Body
`A - 500 - Internal Server Error`

{
    message: Couldn't find a member with the username "username"
}

### Relate the REST API endpoints with User Stories
This endpoint is unrelated to any user stories documented in Sprint01.

## 2 - Request: get /:username
### URI
api/v1/members/
    
### HTTP method
GET

### Headers
Autorization token is not mandatory.

### Description
This endpoint should retrieve information about members (reputation and user).
    
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
            username: "username"
        }
    }
}

`B - 404 NOT FOUND`

 {message:Couldn't find a member with the username "username"}


### Relate the REST API endpoints with User Stories
This endpoint is unrelated to any user stories documented in Sprint01.