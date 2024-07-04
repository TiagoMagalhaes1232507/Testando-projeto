# REST API Endpoint : /api/v1/posts

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

 option A

{ title: string,
  text: string,
  link: string, (optional)
  postType: "text", }

option B

 { title: string,
  text: string, (optional)
  link: string,
  postType: "link", } 

Neste campo, o userID não é obrigatório colocar no body, mas se o puser ele reconhece. O title, postType e o text ou link tenho são obrigatórios. Sendo que apenas é obrigatório colocar ou text ou link, ficando o outro opcional de se por no body.

### Parameters 
`userId?` (string, optional). 

## Response

### Status

A-200 OK
B-400 Bad Request ( estrutura de dados errados no body) - 
C-500 Internal Server Error 
D-403 Forbiden 

### Body

Response A 

message

OK

After placing a text type post in the body and sending it, the response message to the post is OK, with a status of 200 OK. The same happens for the link post.
After placing everything that can be placed in the body, including the optional ones, the response message to the post is OK, with a status of 200 OK.
Note: The front end says

Response B 

Message

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

This response was generated in the face of this:
{ 
title : "Create post",
"text": " create a post test 20",
"postType": "text"
}

400 Bad Request (incorrect data structure in the body)
When not putting the title in quotes, the error message is generated:


Response C  

Message

"TypeError: Cannot read properties of undefined (reading 'toString')

This error message is generated in the face of this:
{ 
"Title": "Create post",
"text": " Create ",
"postType": "text"
}

By not meeting the requested criteria in the body to create a post, such as in the example above not adding the text with sufficient characters.

500 Internal Server Error
This error should not appear because it is an uncontrolled application error (Runtime Error).


Response D 

Message 
"Token signature expired"

After some time, the token expires and this message appears



## Request: post /

## Relate the REST API endpoints with User Stories

| US 004 | [Create Text Post](../../sprint02/us004/readme.md)|
| US 007 | [Create Link Post](../../sprint02/us004/readme.md)|

________________________________________________________________________________________

## 2 - Request: Get / getRecentPosts
### URI

 /api/v1/posts/recent

### HTTP method
    
GET

### Description

This endpoint gets the recent posts

### Headers
    
 Authorization accessToken (optional)


### Body

The request body is empty for GET requests

### Parameters 

`offset?` (number, optional)
`userId?` (string, optional) 

## Response

### Status

A-200 OK
B-500 Internal Server Error
C- 403 Forbiden 

### Body

 Response A 

{
    "posts": 
        ....
}


Response B

{
    "message": "An unexpected error occurred."
}

http://localhost:5001/api/v1/posts/recent?offset=1
other example
http://localhost:5001/api/v1/posts/recent?offset=5

Both situations present this message


Response C

{
    "message": "Token signature expired."
}



## Request: post /

## Relate the REST API endpoints with User Stories
| US 013 | [Discussion's list ordered by date](../../sprint02/us013/readme.md)|
________________________________________________________________________________________

## 3 - Request: Get / getPopulartPosts
### URI

/api/v1/posts/popular

### HTTP method
    
GET

### Description

This endpoint gets the popular posts

### Headers
    
 Authorization accessToken (optional)


### Body

The request body is empty for GET requests

### Parameters 
`offset?` (number, optional); 
`userId?` (string, optional). 

## Response

### Status

A-200 OK
B-500 Internal Server Error
C- 403 Forbiden 


### Body

Response A 

{
    "posts": 
        ....
}


Response B 
 
{
    "message": "An unexpected error occurred."
}

http://localhost:5001/api/v1/posts/popular?offset=1
other example
http://localhost:5001/api/v1/posts/popular?offset=5

Both situations present this message


Response C

{
    "message": "Token signature expired."
}


## Request: post /

## Relate the REST API endpoints with User Stories

| US 010 | [Discussion's list ordered by popularity](../../sprint02/us010/readme.md)|

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

### Test Cases analysis and conclusions
|[Test Cases analysis and conclusions](../posts/tests-analysis/upvote.md)|

## Relate the REST API endpoints with User Stories

| US 008 | [To vote on a Discussion](../../us008/01.requirements-engineering/readme.md)|



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