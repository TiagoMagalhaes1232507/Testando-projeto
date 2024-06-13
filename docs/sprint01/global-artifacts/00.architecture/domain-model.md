# Domain Model Explanation

## Entities

### Visitor

**Attributes:**
None specified.

**Description:**  
Represents a visitor who can view posts, comments, and votes but doesn't have an account.

### User

**Attributes:**
- username: The username of the user.
- email: The email address of the user.
- password: The password for the user's account.

**Description:**  
Represents a registered user who can create posts, write comments, and cast votes.

### Post

**Attributes:**
- title: The title of the post.
- content: The text content of the post.
- createdAt: The date and time when the post was created.

**Description:**  
Represents a post made by a user.

### Comment

**Attributes:**
- content: The content of the comment.
- createdAt: The date and time when the comment was created.

**Description:**  
Represents a comment made on a post.

### Vote

**Attributes:**
- type: The type of the vote (e.g., UPVOTE or DOWNVOTE).
- createdAt: The date and time when the vote was cast.

**Description:**  
Represents a vote cast on a post or comment.

## Relationships

- **User "1" -- "0..*" Post : creates >**
  - **Description:** A single User can create multiple Posts. Each Post is created by exactly one User.

- **Visitor "1" -- "0..*" Post : views >**
  - **Description:** A single Visitor can view multiple Posts. Each Post can be viewed by multiple Visitors.

- **Visitor "1" -- "0..*" Comment : views >**
  - **Description:** A single Visitor can view multiple Comments. Each Comment can be viewed by multiple Visitors.

- **Visitor "1" -- "0..*" Vote : views >**
  - **Description:** A single Visitor can view multiple Votes. Each Vote can be viewed by multiple Visitors.

- **Post "1" -- "0..*" Comment : has >**
  - **Description:** Each Post can have multiple Comments. Each Comment belongs to exactly one Post.

- **User "1" -- "0..*" Comment : writes >**
  - **Description:** A single User can write multiple Comments. Each Comment is written by exactly one User.

- **User "1" -- "0..*" Vote : submits >**
  - **Description:** A single User can cast multiple Votes. Each Vote is cast by exactly one User.

- **Post "1" -- "0..*" Vote : receives >**
  - **Description:** Each Post can receive multiple Votes. Each Vote is associated with exactly one Post.

- **Comment "1" -- "0..*" Vote : receives >**
  - **Description:** Each Comment can receive multiple Votes. Each Vote is associated with exactly one Comment.