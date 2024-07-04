#### Users
- **POST /users**
  - Create a new user
- **GET /users/me**
  - Get current user details
- **POST /users/login**
  - Login user
- **POST /users/logout**
  - Logout user
- **POST /users/token/refresh**
  - Refresh access token
- **DELETE /users/:userId**
  - Delete user
- **GET /users/:username**
  - Get user by username

#### Members
- **GET /members/me**
  - Get current member details
- **GET /members/:username**
  - Get member by username

#### Posts
- **POST /posts**
  - Create a new post
- **GET /posts/recent**
  - Get recent posts
- **GET /posts/popular**
  - Get popular posts
- **GET /posts**
  - Get post by slug
- **POST /posts/upvote**
  - Upvote a post
- **POST /posts/downvote**
  - Downvote a post

#### Comments
- **GET /comments**
  - Get comments by post slug
- **POST /comments**
  - Reply to a post
- **POST /comments/:commentId/reply**
  - Reply to a comment
- **GET /comments/:commentId**
  - Get comment by ID
- **POST /comments/:commentId/upvote**
  - Upvote a comment
- **POST /comments/:commentId/downvote**
  - Downvote a comment