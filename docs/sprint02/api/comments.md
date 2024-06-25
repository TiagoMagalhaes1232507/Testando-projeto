# REST API Endpoint : /api/v1/comments

## 1- Request: GET / Get Comments by Post Slug

### URI

`/api/v1/comments/?{slug}`

### HTTP method

GET

### Description

This endpoint retrieves comments for a specific post identified by its slug.

### Headers

Authorization:  token JWT (optional)

### Parameters
 
* `slug` (string, required)
* `offset?` (number, optional)
* `userId?` (string, optional)

### Body

The request body is empty for GET requests.

## Response

### Status

* A - 200 OK (if slug parameter is provided)
* B - 500 Internal Server Error (if slug parameter is missing)

### Body

* A - `comments` (array of `CommentDTO` objects): An array containing comments for the specified slug parameter provided. Could be returned an empty array `[]`if the slug is not valid. If the array of `CommentDTO` objects is not empty, this includes:  
    * `postTitle`: (string)
    * `commentId`: (string)
    * `parentCommentId?`: (string, optional)
    * `text`: (string) Content of the comment.
    * `member`: (MemberDTO object) Information about the user who created the comment.
    * `createdAt`: (string | Date) 
    * `childComments`: (array of `CommentDTO` objects) An array containing child comments of this comment (optional).
    * `points`: (number)
    * `wasUpvotedByMe`: (boolean, optional)
    * `wasDownvotedByMe`: (boolean, optional)

* B - message: `An unexpected error ocurred` 

## Relate the REST API endpoints with User Stories

The `/api/v1/comments/?{slug}`(GET) endpoint is unrelated to any user stories documented in Sprint01. A potential user story related to this endpoint would be: "As a registered user or a visitor, I want to read the comments for a specific post".

## 2- Request: POST / Reply To Post 

### URI

`/api/v1/comments/?{slug}`

### HTTP method

POST

### Description

This endpoint replies to a specific post identified by its slug.

### Headers

Authorization:  token JWT

### Parameters
 
* `slug` (string, required)

### Body

* `comment` (string, required) 

## Response

### Status

* A - 200 OK (if slug parameter and the comment of the body is provided) 
* B - 500 Internal Server Error (if slug parameter and the comment of the body is missing) 
* C - 404 Not Found (if slug do not exist) 

### Body

* A - `Ok` 
* B - message: `TypeError: Cannot read properties of undefined (reading 'toString')` 
* C - message: ` Couldn't find a post by slug {${slug}}`  

## Relate the REST API endpoints with User Stories

The `/api/v1/comments/?{slug}` (POST) endpoint is unrelated to any user stories documented in Sprint01. A potential user story related to this endpoint would be: "As a registered user, I want to reply to a specific post". 

## 3- Request: POST /  Reply To Comment 
### URI

`/api/v1/comments/:commentId/reply` 

### HTTP method

POST

### Description

This endpoint replies to a comment identified by Id. 

### Headers

Authorization:  token JWT

### Parameters
 
* `slug` (string, required)

### Body

* `comment` (string, required) 

## Response

### Status

* A - 200 OK (if slug parameter, commentId on URL and the comment of the body is provided) 
* B - 500 Internal Server Error (if if slug parameter, commentId on URL and the comment of the body is missing) 
* C - 404 Not Found (if slug and commentId does not exist) 

### Body

* A - `Ok` 
* B - message: `TypeError: Cannot read properties of undefined (reading 'toString')` 
* C - message: ` Couldn't find a post by slug {${slug}}`/` Couldn't find a comment by commentId {${commentId}}` 
 
## Relate the REST API endpoints with User Stories

| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)|

## 3- Request: get / Get Comment by CommentId

### URI

api/v1/comment/:commentId

### HTTP method

POST

### Description

Used to show the details of a specific comment by its unique identifier (commentId).

### Headers

Authorization accessToken

### Body

null

## Response

### Status

A- 200 - OK
B- 403 - Forbidden
C- 404 - Not Found

### Body

A- {
comment: {
postSlug: string,
commentId: string,
parentCommentId: string,
text: string html,
member: {
reputation: number,
user: {
username: string
}
},
createdAt: Date,
childComments: [],
postTitle: string,
points: number,
wasUpvotedByMe: boolean,
wasDownvotedByMe: boolean
}
}

B- message: Token signature expired.
C- message: Couldn't find a comment by comment id {}

## Relate the REST API endpoints with User Stories

## 4- Request: post / Upvote to comment

### URI

api/v1/comment/:commentId/upvote

### HTTP method

POST

### Description

Used to allow users to interact with the API to upvote comments.

### Headers

Authorization accessToken

### Body

null

## Response

### Status

A- 200 - OK
B- 403 - Forbidden
C- 404 - Not Found

### Body

A- OK
B- message: Token signature expired.
C- message: Couldn't find a comment with id {}.

## Relate the REST API endpoints with User Stories

| US 008 (To vote on a discussion) | [1232512](sprint01/us008/readme.md)

## 5- Request: post / Downvote to comment

### URI

api/v1/comment/:commentId/downvote

### HTTP method

POST

### Description

Used to allow users to interact with the API to downvote comments.

### Headers

Authorization accessToken

### Body

null

## Response

### Status

A- 200 - OK
B- 403 - Forbidden
C- 404 - Not Found

### Body

A- OK
B- message: Token signature expired.
C- message: Couldn't find a comment with id {}.

## Relate the REST API endpoints with User Stories

| US 008 (To vote on a discussion) | [1232512](sprint01/us008/readme.md)
