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