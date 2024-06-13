## Domain Model Explanation

### Entities

1. **Visitor**
   - **Attributes:**
     - `visitorID: int` - A unique identifier for each visitor.
   - **Description:** Represents a visitor who can view posts, list comments, and see votes but doesn't have an account.

2. **User**
   - **Attributes:**
     - `userId: String` - A unique identifier for each user.
     - `username: String` - The username of the user.
     - `email: String` - The email address of the user.
     - `password: String` - The password for the user's account.
   - **Description:** Represents a registered user who can create posts, write comments, and cast votes.

3. **Post (abstract class)**
   - **Attributes:**
     - `postID: int` - A unique identifier for each post.
     - `title: String` - The title of the post.
     - `timestamp: DateTime` - The date and time when the post was created.
   - **Description:** An abstract class representing a general post. Specific types of posts (TextPost and LinkPost) inherit from this class.

4. **TextPost**
   - **Attributes:**
     - `content: String` - The text content of the post.
   - **Description:** Represents a text-based post, inheriting from the abstract Post class.

5. **LinkPost**
   - **Attributes:**
     - `url: String` - The URL link in the post.
   - **Description:** Represents a link-based post, inheriting from the abstract Post class.

6. **Comment**
   - **Attributes:**
     - `commentId: String` - A unique identifier for each comment.
     - `content: String` - The content of the comment.
     - `createdAt: Date` - The date and time when the comment was created.
   - **Description:** Represents a comment made on a post.

7. **Vote**
   - **Attributes:**
     - `voteId: String` - A unique identifier for each vote.
     - `type: VoteType` - The type of the vote (either UPVOTE or DOWNVOTE).
     - `createdAt: Date` - The date and time when the vote was cast.
   - **Description:** Represents a vote cast on a post.

8. **VoteType (enum)**
   - **Values:**
     - `UPVOTE` - Represents an upvote.
     - `DOWNVOTE` - Represents a downvote.
   - **Description:** An enumeration defining the types of votes.

### Relationships

1. **User "1" --> "0..*" Post : creates**
   - **Description:** A single User can create multiple Posts. Each Post is created by exactly one User.

2. **Visitor "1" -- "0..*" Post : views**
   - **Description:** A single Visitor can view multiple Posts. Each Post can be viewed by multiple Visitors.

3. **Visitor "1" -- "0..*" Comment : lists**
   - **Description:** A single Visitor can list multiple Comments. Each Comment can be listed by multiple Visitors.

4. **Visitor "1" -- "0..*" Vote : sees**
   - **Description:** A single Visitor can see multiple Votes. Each Vote can be seen by multiple Visitors.

5. **Post "1" --> "1" User : belongs to**
   - **Description:** Each Post belongs to exactly one User.

6. **Post "1" --> "0..*" Comment : has**
   - **Description:** Each Post can have multiple Comments. Each Comment belongs to exactly one Post.

7. **Comment "1" --> "1" Post : belongs to**
   - **Description:** Each Comment belongs to exactly one Post.

8. **Comment "1" --> "1" User : written by**
   - **Description:** Each Comment is written by exactly one User.

9. **User "0..*" --> "0..*" Vote : votes**
   - **Description:** A single User can cast multiple Votes. Each Vote is cast by exactly one User.

10. **Post "1" --> "0..*" Vote : receives**
    - **Description:** Each Post can receive multiple Votes. Each Vote is associated with exactly one Post.

11. **Post <|-- TextPost**
    - **Description:** TextPost is a subclass of Post, inheriting all attributes and relationships of Post.

12. **Post <|-- LinkPost**
    - **Description:** LinkPost is a subclass of Post, inheriting all attributes and relationships of Post.

