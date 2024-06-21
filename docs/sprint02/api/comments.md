# REST API Endpoint : /api/v1/comments

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
