# REST API Endpoint : /api/v1/users

## 1- Request: Post / Create  Post
### URI

 /api/v1/posts/
### HTTP method
    
    POST

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

The `/api/v1/posts/createPost`(Post) endpoint is related to  user stories  US 004 - Create a discussion (text) and to  US 007 - Create link post 


# REST API Endpoint : /api/v1/users

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