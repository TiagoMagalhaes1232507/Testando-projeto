# REST API Endpoint : /api/v1/comments 

## 1- Request: GET / Get Comments by Post Slug 

### URI 

`/api/v1/comments/?{slug}` 

### HTTP method 

GET 

### Description 

This endpoint retrieves comments for a specific post identified by its slug. 

### Headers 

Authorization: acessToken (optional) 

### Parameters 

- `slug` (string, required) 
- `offset?` (number, optional) 
- `userId?` (string, optional) 

### Body 

The request body is empty for GET requests. 

## Response 

### Status 

- A - 200 OK (if slug parameter is provided and exists, or is empty, or does not exist) 
- B - 403 Forbiden (Invalid or missing token) 
- C - 500 Internal Server Error (if slug parameter is missing) 

### Body 

- A - `comments` (array of `CommentDTO` objects): An array containing comments for the specified slug parameter provided. An empty array `[]` could be returned `[]`, if there are no comments, if the slug does not exist or if the slug parameter is empty.  
If the array of `CommentDTO` objects is not empty, this includes: 

  - `postTitle`: (string) 
  - `commentId`: (string) 
  - `parentCommentId?`: (string, optional) 
  - `text`: (string) Content of the comment. 
  - `member`: (MemberDTO object) Information about the user who created the comment. 
  - `createdAt`: (string | Date) 
  - `childComments`: (array of `CommentDTO` objects) An array containing child comments of this comment (optional). 
  - `points`: (number) 
  - `wasUpvotedByMe`: (boolean, optional) 
  - `wasDownvotedByMe`: (boolean, optional) 

- B - message: `Token signature expired` 
- C - message: `An unexpected error ocurred`  

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

Authorization: acessToken (required) 

### Parameters 

- `slug` (string, required) 

### Body 

- `userId`: (string, required); 
- `comment` (string, required) 

## Response 

### Status 

- A - 200 OK (if slug parameter is provided and exists and the comment of the body is also  provided) 
- B - 403 Forbiden (Invalid or missing token) 
- C - 404 Not Found (if slug do not exist) 
- D - 500 Internal Server Error (if slug parameter or the comment are missing or empty) 

### Body 

- A - `Ok` 
- B - message: `Token signature expired` 
- C - message: `Couldn't find a post by slug {${slug}}` 
- D - message: `TypeError: Cannot read properties of undefined (reading 'toString')`  

## Relate the REST API endpoints with User Stories 

The `/api/v1/comments/?{slug}` (POST) endpoint is unrelated to any user stories documented in Sprint01. A potential user story related to this endpoint would be: "As a registered user, I want to reply to a specific post". 

## 3- Request: POST / Reply To Comment 

### URI 

`/api/v1/comments/:commentId/reply` 

### HTTP method 

POST 

### Description 

This endpoint replies to a comment identified by Id. 

### Headers 

Authorization: acessToken (required) 

### Parameters 

- `slug` (string, required) 

### Body 

- `userId` (string, required) 
- `comment` (string, required) 
- `parentCommentId`: (string, required) 

## Response 

### Status 

- A - 200 OK (if slug parameter, commentId on URL and the body is provided) 
- B - 403 Forbiden (Invalid or missing token) 
- C - 404 Not Found (if slug and commentId on the URL does not exist or is missing) 
- D - 500 Internal Server Error (if slug parameter or the comment of the body is missing) 

### Body 

- A - `Ok` 
- B - message: `Token signature expired` 
- C - message: ` Couldn't find a post by slug {${slug}}`/`Couldn't find a comment by commentId {${commentId}}`/ ´html message` 
- D - message: `TypeError: Cannot read properties of undefined (reading 'toString')` 

## Relate the REST API endpoints with User Stories 

| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)| 
 
## 4- Request: get / Get Comment by CommentId

### URI

`api/v1/comment/:commentId`

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

- A- 200 - OK
- B- 403 - Forbidden
- C- 404 - Not Found
- D - 500 - Internal Server Error 

### Body

- A- {
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

- B- message: `Token signature expired.`
- C- message: `Couldn't find a comment by comment id {}.`
- D - message: `An unexpected error occurred.`

## Relate the REST API endpoints with User Stories

## 5- Request: post / Upvote to comment

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

- A- 200 - OK
- B- 403 - Forbidden
- C- 404 - Not Found
- D - 500 - Internal Server Error 

### Body

- A- `OK`
- B- message: `Token signature expired.`
- C- message: `Couldn't find a comment with id {}.`
- D - message: `An unexpected error occurred.`

## Relate the REST API endpoints with User Stories

| US 008 (To vote on a discussion) | [1232512](sprint01/us008/readme.md)

## 6- Request: post / Downvote to comment

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

- A- 200 - OK
- B- 403 - Forbidden
- C- 404 - Not Found
- D - 500 - Internal Server Error 

### Body

- A- `OK`
- B- message: `Token signature expired.`
- C- message: `Couldn't find a comment with id {}.`
- D - message: `An unexpected error occurred.`

## Relate the REST API endpoints with User Stories

| US 008 (To vote on a discussion) | [1232512](sprint01/us008/readme.md)
