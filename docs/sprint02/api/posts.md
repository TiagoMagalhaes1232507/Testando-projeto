# REST API Endpoint : /api/v1/Posts

## 1- Request: Post / Create Post
### URI

 `/api/v1/posts/`
### HTTP method
    
POST


### Description

This endpoint creates a post

### Headers
    
Authorization accessToken

### Body

 opção A

{ userId: string,(optional)
  title: string,
  text: string,
  postType: "text", }

opção B

 { userId: string,(optional)
  title: string,
  link: string,
  postType: "link", } 

## Response

### Status

A- 200 OK
B- 400 Bad Request ( estrutura de dados errados no body) - explicar dar exemplo
C- 500 Internal Server Error 
D- 403 Forbiden 

### Body

A - OK

B- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Error</title>
</head>

<body>
    <pre>....</pre>
</body>

</html>

C-("TypeError: Cannot read properties of undefined (reading 'toString'))

D- "Token signature expired."

## Request: post /

## Relate the REST API endpoints with User Stories

The `/api/v1/posts/`(Post) endpoint is related to  user stories  US 004 - Create a discussion and to  US 007 - Create link post 

________________________________________________________________________________________

## 2 - Request: Get / getRecentPosts
### URI

 /api/v1/posts/recent

### HTTP method
    
GET

### Headers
    
 Authorization accessToken (optional)


### Body

The request body is empty for GET requests

## Response

### Status

200 OK

### Body

Posts []

## Request: post /

## Relate the REST API endpoints with User Stories

________________________________________________________________________________________

## 3 - Request: Get / getPopulartPosts
### URI

/api/v1/posts/popular

### HTTP method
    
GET

### Headers
    
 Authorization accessToken (optional)

### Body
The request body is empty for GET requests.

## Response

### Status

200 OK

### Body

Posts [] 

## Request: post /

## Relate the REST API endpoints with User Stories

________________________________________________________________________________________

## 4- Request: GET / Get post by slug
### URI
    api/v1/posts/

### HTTP method
    POST

### Description
    Used to get posts by slug. The API should provide the post related to that unifying slug.

### Headers
slug

### Body

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
________________________________________________________________________________________

## 5- Request: POST / Upvote Post
### URI
    api/v1/posts/upvote/

### HTTP method
    POST

### Description
    Used to allow users to interact with the API to upvote posts.

### Headers
Authorization accessToken
slug

### Body

## Response
### Status
- A- 200 - OK
- B- 403 - Forbidden
- C- 404 - Not Found

### Body
- A- `OK`
- B- message: `Token signature expired.`
- C- message: `Couldn't find a post with id {}.`

## Relate the REST API endpoints with User Stories

| US 008 | [To vote on a Discussion](../../sprint01/us008/readme.md)|

________________________________________________________________________________________

## 6- Request: POST / Downvote Post
### URI
    api/v1/posts/downvote

### HTTP method
    POST

### Description
    Used to allow users to interact with the API to downvote comments.

### Headers
Authorization accessToken
slug

### Body

## Response
### Status
- A- 200 - OK
- B- 403 - Forbidden
- C- 404 - Not Found

### Body
- A- `OK`
- B- message: `Token signature expired.`
- C- message: `Couldn't find a post with id {}.`

## Relate the REST API endpoints with User Stories

| US 008 | [To vote on a Discussion](../../sprint01/us008/readme.md)|