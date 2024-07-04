# REST API Endpoint : /api/v1/comments 

## 1 - Get Comments by Post Slug 

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

### Request Body 

The request body is empty for GET requests. 

### Tests (CTC)

### [Get Coments by Post Slug](../../../src/automated-tests/comments/comments-tests2.spec.ts)

CTC01 - Valid slug parameter

- expected/received response:
  - status: 200 OK
  - body: "comments": [
        {
            "postSlug": string,
            "commentId": string,
            "parentCommentId?": string,
            "text": string,
            "member": {
                "reputation": number,
                "user": {
                    "username": string
                }
            },
            "createdAt": string | Date,
            "childComments": array of CommentDTO objects,
            "postTitle": string,
            "points": number,
            "wasUpvotedByMe": boolean,
            "wasDownvotedByMe": boolean
        },
  ]
    
CTC02 - Invalid slug parameter

- expected response:
  - status: 404 Not Found
  - body:"Couldn't find a post by slug {${slug}}"

- received response:
  - status: 200 OK
  - body: "comments": []

CTC03 - Empty slug parameter

- expected response:
  - status: 400 Bad Request
  - body (message): "Slug parameter must not be empty"

- received response:
  - status: 200 OK
  - body: "comments": []

CTC04 - Missing slug parameter

- expected response:
  - status: 400 Bad Request
  - body (message): "Slug parameter must be provided"

- received response:
  - status: 500 Internal Server Error
  - body: "An unexpected error ocurred"

CTC05 - invalid token

- expected response:
  - status: 401 Unauthorized
  - body (message): "User authentication required"

- received response:
  - status: 403 Forbidden
  - body: "Token signature expired"

### Remarks

### Relate the REST API endpoints with User Stories 

The `/api/v1/comments/?{slug}`(GET) endpoint is unrelated to any user stories documented in Sprint01. A potential user story related to this endpoint would be: "As a registered user or a visitor, I want to read the comments for a specific post". 

## 2 - Reply To Post 

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

### Request Body 

- `userId`: (string, required); 
- `comment` (string, required). 

### Tests (CTC)

### [Reply To Post](../../../src/automated-tests/comments/comments-tests2.spec.ts)

CTC06 - comment length >= 20 <= 10000

- expected/received response:
  - status: 200 OK
  - body: "OK"

CTC07 - comment length = 20 chars

- expected/received response:
  - status: 200 OK
  - body: "OK"

CTC08 - comment = 10000 chars

- expected/received response:
  - status: 200 OK
  - body: "OK"

CTC09 - comment length < 20 chars

- expected response:
  - status: 400 Bad Request
  - body: "Comment length >= 20 <= 10000"

- received response:
  - status: 200 OK
  - body: "OK"

CTC010 - comment length > 10000 chars

- expected response:
  - status: 400 Bad Request
  - body: "Comment length >= 20 <= 10000"

- received response:
  - status: 500 Internal Server Error 
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC011 - missing comment

- expected response:
  - status: 400 Bad Request
  - body: "A comment must be provided"

- received response:
  - status: 500 Internal Server Error 
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC012 - empty comment

- expected response:
  - status: 400 Bad Request
  - body: "Comment must not be empty"

- received response:
  - status: 500 Internal Server Error
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC013 - invalid slug

- expected/received response:
  - status: 404 Not Found
  - body: "Couldn't find a post by slug {${slug}}"

CTC014 - missing slug parameter

- expected response:
  - status: 400 Bad Request
  - body (message): "Slug parameter must be provided"

- received response:
  - status: 500 Internal Server Error
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC015 - empty slug parameter

- expected response:
  - status: 400 Bad Request
  - body (message): "Slug parameter must not be empty"

- received response:
  - status: 500 Internal Server Error
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC016 - invalid token

- expected response:
  - status: 401 Unauthorized
  - body (message): "User authentication required"

- received response:
  - status: 403 Forbidden
  - body: "Token signature expired"

CTC017 - missing token

- expected response:
  - status: 401 Unauthorized
  - body (message): "User authentication required"

- received response:
  - status: 403 Forbidden
  - body: "No access token provided"

### Remarks
Certain parameters, like userId s required for the request body but is possible to get a sucess response without including this.

### Relate the REST API endpoints with User Stories 

| US 005 | [Create a comment](/docs/sprint01/us005/readme.md)| 

## 3 - Request: Reply To Comment 

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

### Request Body 

- `userId` (string, required); 
- `comment` (string, required); 
- `parentCommentId`: (string, required). 

### Tests (CTC)

### [Reply to a comment](../../../src/automated-tests/comments/comments-tests2.spec.ts)

CTC018 - comment length >= 20 <= 10000

- expected/received response:
  - status: 200 OK
  - body: "OK"

CTC019 - comment length = 20 chars

- expected/received response:
  - status: 200 OK
  - body: "OK"

CTC020 - comment = 10000 chars

- expected/received response:
  - status: 200 OK
  - body: "OK"

CTC021 - comment length < 20 chars

- expected response:
  - status: 400 Bad Request
  - body: "Comment length >= 20 <= 10000"

- received response:
  - status: 200 OK
  - body: "OK"

CTC022 - comment length > 10000 chars

- expected response:
  - status: 400 Bad Request
  - body: "Comment length >= 20 <= 10000"

- received response:
  - status: 500 Internal Server Error 
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC023 - missing comment

- expected response:
  - status: 400 Bad Request
  - body: "A comment must be provided"

- received response:
  - status: 500 Internal Server Error 
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC024 - empty comment

- expected response:
  - status: 400 Bad Request
  - body: "Comment must not be empty"

- received response:
  - status: 500 Internal Server Error
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC025 - invalid slug

- expected/received response:
  - status: 404 Not Found
  - body: "Couldn't find a post by slug {${slug}}"

CTC026 - missing slug parameter

- expected response:
  - status: 400 Bad Request
  - body (message): "Slug parameter must be provided"

- received response:
  - status: 500 Internal Server Error
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC027 - empty slug parameter

- expected response:
  - status: 400 Bad Request
  - body (message): "Slug parameter must not be empty"

- received response:
  - status: 500 Internal Server Error
  - body: "TypeError: Cannot read properties of undefined (reading 'toString')"

CTC028 - invalid commentId

- expected/received response:
  - status: 404 Not Found
  - body: "Couldn't find a comment by commentId {${commentId}}"

CTC029 - missing commentId

- expected/received response:
  - status: 404 Not Found
  - body: "html message"

CTC030 - invalid token

- expected response:
  - status: 401 Unauthorized
  - body (message): "User authentication required"

- received response:
  - status: 403 Forbidden
  - body: "Token signature expired"

CTC031 - missing token

- expected response:
  - status: 401 Unauthorized
  - body (message): "User authentication required"

- received response:
  - status: 403 Forbidden
  - body: "No access token provided"

### Remarks
Certain parameters, like userId and parentCommentId, are required for the request body but is possible to get a sucess response without including them.

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
