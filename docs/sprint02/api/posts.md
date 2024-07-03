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

{ title: string,
  text: string,
  link: string, (optional)
  postType: "text", }

opção B

 { title: string,
  text: string, (optional)
  link: string,
  postType: "link", } 

Neste campo, o userID não é obrigatório colocar no body, mas se o puser ele reconhece. O title, postType e o text ou link tenho são obrigatórios. Sendo que apenas é obrigatório colocar ou text ou link, ficando o outro opcional de se por no body.

### Parameters 
`userId?` (string, optional). 

## Response

### Status

200 OK
400 Bad Request ( estrutura de dados errados no body) - 
500 Internal Server Error 
403 Forbiden 

### Body

opção A - OK

Após colocar no body um post do tipo text, e fazer send, a mensagem de resposta aos post é OK, com o status de 200 OK.
{ 
"title" : "Create post",
"text": " create a post test 20",
"postType": "text"
}

opção B - OK
ao colocar o parametro userId, opcional
{ 
"userId": "string6",
"title" : "Create post",
"text": " create a post test 20",
"postType": "text"
}

A resposta obtida no body do post é OK, e status 200 OK

opção C- 400 Bad Request ( estrutura de dados errados no body)

Exemplo:
{ 
title : "Create post",
"text": " create a post test 20",
"postType": "text"
}

Ao não por o title entre aspas a mensagem de erro é gerada:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Error</title>
</head>

<body>
    <pre>SyntaxError: Expected property name or &#39;}&#39; in JSON at position 3<br> &nbsp; &nbsp;at JSON.parse .... </pre>
</body>

</html>


opção D-500 Internal Server Error 
Exemplo
{ 
"": "Create post",
"text": " create a post test 20",
"postType": "text"
}

Ao não cumprir os critérios pedidos no body para criara um post, como exemplo acima não adicionar um title ele responde com esta mensagem:
("TypeError: Cannot read properties of undefined (reading 'toString'))

opção E - 403 Forbiden 

Ao fim de algum tempo, o token expira e aparece esta mensagem:
"Token signature expired."

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

### Parameters 
`offset?` (number, optional); 
`userId?` (string, optional). 

## Response

### Status

200 OK
500 Internal Server Error
403 Forbiden 


### Body

opção A - sem os parametros:
{
    "posts": 
        ....
}

Neste caso, não preciso de ter posts ou estar logado, ou ter o accesstoken
Ele responde com os posts.

opção B - 200 OK
com o userID no body
{
"userID": "string6"
}
 aparecem os posts, na resposta
Posts []

opção C- 500 Internal Server Error

http://localhost:5001/api/v1/posts/recent?offset=1
outro exemplo 
http://localhost:5001/api/v1/posts/recent?offset=5

ambas as situações apresentam esta mensagem:

{
    "message": "An unexpected error occurred."
}

Isto aparece com token ou sem token



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

The request body is empty for GET requests

### Parameters 
`offset?` (number, optional); 
`userId?` (string, optional). 

## Response

### Status

200 OK
403 Forbiden 


### Body

opção A - sem os parametros sem token:

{
    "posts": 
        ....
}

Neste caso, não preciso de ter posts ou estar logado, ou ter o accesstoken
Ele responde com os posts.

opção B - sem os parametros com token:

{
    "posts": 
        ....
}

Com access tokken, também aparecem os posts na resposta

opção C - 200 OK
com o userID no body - sem token

{
"userID": "string6"
}
aparecem os posts, na resposta
{
    "posts": 
        ....
}

opção D - 200 OK
com o userID no body - com token

{
"userID": "string6"
}
aparecem os posts, na resposta

{
    "posts": 
        ....
}


opção E- 200 OK 
sem token

http://localhost:5001/api/v1/posts/popular?0ffset=1

{
    "posts": 
        ....
}

http://localhost:5001/api/v1/posts/popular?0ffset=5

{
    "posts": 
        ....
}

aqui aparecem os mesmos posts na respostas, quer com token ou sem token

opção F- 200 OK 

Com token

http://localhost:5001/api/v1/posts/popular?0ffset=1

{
    "posts": 
        ....
}

http://localhost:5001/api/v1/posts/popular?0ffset=5

{
    "posts": 
        ....
}

aqui aparecem os mesmos posts na respostas, quer com token ou sem token

opção G- 403 Forbiden 

O token expirou e aparece esta mensagem:
{
    "message": "Token signature expired."
}



## Request: post /

## Relate the REST API endpoints with User Stories

________________________________________________________________________________________

## 4- Request: GET / Get post by slug
### URI
api/v1/posts/?={slug}

### HTTP method
GET

### Description
Fetches the post associated with the specified slug.

### Headers
Authorization: Bearer {accessToken}

### Body
None

## Response
### Status
A - 200 - OK: Successfully retrieved the post.
B - 404 - Not Found: An error given when there are no posts in the database.
B - 500 - Internal Server Error: A generic error message, given when the slug is invalid.

### Body
A - message: 
{
    "post": {
        "slug": "0953436-1st-post",
        "title": "1ST post",
        "createdAt": "2024-07-02T13:58:20.000Z",
        "memberPostedBy": {
            "reputation": 0,
            "user": {
                "username": "1181731"
            }
        },
        "numComments": 0,
        "points": 1,
        "text": "This is my first post",
        "link": "",
        "type": "text",
        "wasUpvotedByMe": false,
        "wasDownvotedByMe": false
    }
}

B - message:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Error</title>
</head>
<body>
    <pre>Cannot GET /api/v1/post/</pre>
</body>
</html>

C - message: `Couldn't find a post by slug {slug}.`

## Relate the REST API endpoints with User Stories
None
________________________________________________________________________________________

## 5- Request: POST / Upvote Post
### URI
api/v1/posts/upvote

### HTTP method
POST

### Description
Allows users to upvote a specific post.

### Headers
Authorization: Bearer {accessToken}

### Body
{
  "slug": "{slug}"
}

## Response
### Status
- A- 200 - OK: Successfully upvoted the post.
- B- 403 - Forbidden: Invalid or expired token.
- C- 404 - Not Found: Post with the specified slug not found.

### Body
- A- `OK`
- B- message: `Token signature expired.`
- C- message: `Couldn't find a post by slug {slug}.`

## Relate the REST API endpoints with User Stories

| US 008 | [To vote on a Discussion](../../sprint01/us008/readme.md)|

________________________________________________________________________________________

## 6- Request: POST / Downvote Post
### URI
api/v1/posts/downvote

### HTTP method
POST

### Description
Allows users to downvote a specific post.

### Headers
Authorization: Bearer {accessToken}

### Body
{
  "slug": "{slug}"
}

## Response
### Status
- A- 200 - OK: Successfully upvoted the post.
- B- 403 - Forbidden: Invalid or expired token.
- C- 404 - Not Found: Post with the specified slug not found.

### Body
- A- `OK`
- B- message: `Token signature expired.`
- C- message: `Couldn't find a post by slug {slug}.`

## Relate the REST API endpoints with User Stories

| US 008 | [To vote on a Discussion](../../sprint01/us008/readme.md)|