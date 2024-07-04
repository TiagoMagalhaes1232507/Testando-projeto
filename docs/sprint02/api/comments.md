# REST API Endpoint : /api/v1/comments 

## 1- Request: GET / Get Comments by Post Slug 

### URI 

`/api/v1/comments/?{slug}` 

### HTTP method 

GET 

### Description 

This endpoint retrieves comments for a specific post identified by its slug. 

### Headers 

Authorization: acessToken (optional). 

### Parameters 

- `slug` (string, required); 
- `offset?` (number, optional); 
- `userId?` (string, optional). 

### Body 

The request body is empty for GET requests. 

## Tests

### [Get Coments by Post Slug](../../../src/automated-tests/comments/comments-tests2.spec.ts)

CTC021 - Valid slug parameter is provided

- expected response:
  - status: 200
  - body (message): "comments": [
    {
            "postSlug": string,
            "commentId": string,
            "parentCommentId?": string,
            "text": string,
            "member": MemberDTO,
            "createdAt": string | Date,
            "childComments": CommentDTO[],
            "postTitle": string,
            "points": number,
            "wasUpvotedByMe": boolean,
            "wasDownvotedByMe": boolean
    }
  ]
    
-received response
  - status: 200
  - body (message): 
  "comments": [
        {
            "postSlug": "6554114-criar-um-post",
            "commentId": "0372bafc-01c7-4d6d-9363-afbf539dda2f",
            "parentCommentId": null,
            "text": "Testing comment text",
            "member": {
                "reputation": 0,
                "user": {
                    "username": "anabastos"
                }
            },
            "createdAt": "2024-07-03T15:51:19.000Z",
            "childComments": [],
            "postTitle": "criar um post",
            "points": 1,
            "wasUpvotedByMe": false,
            "wasDownvotedByMe": false
        },
  ]
- A - 200 OK (if the slug parameter is provided, even if it is invalid or empty); 
- B - 403 Forbiden (if acessToken expired); 
- C - 500 Internal Server Error (if slug parameter is missing). 

### Body 

- A - `comments` (array of `CommentDTO` objects): An array containing comments for the specified slug parameter provided. An empty array `[]` could be returned `[]`, if there are no comments, if the slug does not exist or if the slug parameter is empty.  
If the array of `CommentDTO` objects is not empty, this includes: 


  postSlug: string;
  postTitle: string;
  commentId: string;
  parentCommentId?: string;
  text: string;
  member: MemberDTO;
  createdAt: string | Date;
  childComments: CommentDTO[];
  points: number;
  wasUpvotedByMe: boolean;
  wasDownvotedByMe: boolean;

- B - message: `Token signature expired`; 
- C - message: `An unexpected error ocurred`.  

## Remarks
required parameters

## Relate the REST API endpoints with User Stories 

The `/api/v1/comments/?{slug}`(GET) endpoint is unrelated to any user stories documented in Sprint01. A potential user story related to this endpoint would be: "As a registered user or a visitor, I want to read the comments for a specific post". 

# Tests files

tes
[get coments by post slug](../../../src/automated-tests/comments/comments-tests2.spec.ts)


## 2- Request: POST / Reply To Post 

### URI 

`/api/v1/comments/?{slug}` 

### HTTP method 

POST 

### Description 

This endpoint replies to a specific post identified by its slug. 

### Headers 

Authorization: acessToken (required). 

### Parameters 

- `slug` (string, required). 

### Body 

- `userId`: (string, required); 
- `comment` (string, required). 

## Tests

### [Get Coments by Post Slug](../../../src/automated-tests/comments/comments-tests2.spec.ts)

CTC021 - Valid slug parameter is provided

- expected response:
  - status: 200
  - message: ok this message should be more descritive

-received response
  - status: 200
 

- A - 200 OK (Sucess);
- B - 403 Forbiden (if acessToken expired or is missing); 
- C - 404 Not Found (if slug does not exist); 
- D - 500 Internal Server Error (if slug parameter or the comment are missing or empty). 

### Body 

- A - message: `OK`; 
- B - message: `Token signature expired`/`No access token provided`; 
- C - message: `Couldn't find a post by slug {${slug}}`;
- D - message: `TypeError: Cannot read properties of undefined (reading 'toString')`.  

## Relate the REST API endpoints with User Stories 

| US 005 | [Create a comment](/docs/sprint01/us005/readme.md)| 

## 3- Request: POST / Reply To Comment 

### URI 

`/api/v1/comments/:commentId/reply?{slug}` 

### HTTP method 

POST 

### Description 

This endpoint replies to a comment identified by Id. 

### Headers 

Authorization: acessToken (required). 

### Parameters 

- `slug` (string, required). 

### Body 

- `userId` (string, required); 
- `comment` (string, required); 
- `parentCommentId`: (string, required). 

## Response 

### Status 

- A - 200 OK (Sucess);
- B - 403 Forbiden (if acessToken expired or is missing); 
- C - 404 Not Found (if slug and commentId does not exist or is missing); 
- D - 500 Internal Server Error (if slug parameter or the comment are empty or missing). 

### Body 

- A - message: `OK`; 
- B - message: `Token signature expired`/`No access token provided`; 
- C - message: ` Couldn't find a post by slug {${slug}}`/`Couldn't find a comment by commentId {${commentId}}`/ `html message`; 
- D - message: `TypeError: Cannot read properties of undefined (reading 'toString')`. 

## Relate the REST API endpoints with User Stories 

| US 006 | [Reply directly to a comment in a Discussion](/docs/sprint01/us006/readme.md)| 
 
## 4- Request: get / Get Comment by CommentId

### URI

`api/v1/comment/:commentId`

### HTTP method

GET

### Description

Used to show the details of a specific comment by its unique identifier (commentId).

### Headers

Authorization accessToken

### Parameters 

- `commentID` (string, required); 

### Body

none

## Response

### Status

- A- 200 - OK / Comment retrieved successfully.
- B- 404 - Not Found / Not Found: An error given when there are no comments in the database.
- C - 500 - Internal Server Error / Internal Server Error: A generic error message given when the commentID is empty.
- D - 403 - Forbidden / Invalid or expired token.

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


- B - message: `Couldn't find a comment by comment id {}.`
- C - message: `An unexpected error occurred.`
- D - message: `Token signature expired.`

## Relate the REST API endpoints with User Stories
none

## 5- Request: post / Upvote to comment

### URI

api/v1/comment/:commentId/upvote

### HTTP method

POST

### Description

Used to allow users to interact with the API to upvote comments.

### Headers

Authorization accessToken

## Parameters

- `commentID` (string, required); 

### Body
none

## Response

### Status

- A - 200 - OK / Successfully upvoted the comment.
- B - 404 - Not Found / Not Found: Comment with the specified comment Id not found.
- C - 500 - - Internal Server Error - Internal Server Error: A generic error message given when the access token is empty.
- D - 403 - Forbidden / Invalid or expired token.


### Body

- A - `OK`
- B - message: `Couldn't find a comment with id {}.` 
- C - message:  `An unexpected error occurred`
- D - message: `Token signature expired.`

## Relate the REST API endpoints with User Stories

none

## 6- Request: post / Downvote to comment

### URI

api/v1/comment/:commentId/downvote

### HTTP method

POST

### Description

Used to allow users to interact with the API to downvote comments.

### Headers

Authorization accessToken

## Parameters

- `commentID` (string, required); 


### Body

none

## Response

### Status

- A - 200 - OK / Successfully upvoted the comment.
- B - 404 - Not Found / Not Found: Comment with the specified comment Id not found.
- C - 500 - - Internal Server Error - Internal Server Error: A generic error message given when the access token is empty.
- D - 403 - Forbidden / Invalid or expired token.


### Body

- A - `OK`
- B - message: `Couldn't find a comment with id {}.` 
- C - message:  `An unexpected error occurred`
- D - message: `Token signature expired.`

## Relate the REST API endpoints with User Stories

none

