import request from "supertest";
import { CreateUserDTO } from "../modules/users/useCases/createUser/CreateUserDTO";
import { LoginDTO } from "../modules/users/useCases/login/LoginDTO";
import { CreatePostDTO } from "../modules/forum/useCases/post/createPost/CreatePostDTO";
import { ReplyToPostDTO } from "../modules/forum/useCases/comments/replyToPost/ReplyToPostDTO";
import { ReplyToCommentDTO } from "../modules/forum/useCases/comments/replyToComment/ReplyToCommentDTO";
import { bigText10000char } from "./mocks";
import { bigText10010char } from "./mocks";

const app: string = "http://localhost:5001";
const uri: string = "/api/v1";
const username: string = "anabastos";
const password: string = "esposende";
const email: string = "ajlbastos@gmail.com";
let token: string;
let slug: string;
let commentId: string;
const invalidSlug: string = "123-non-existent-slug";
const emptySlug: string = "";
const invalidCommentId: string = "invalidCommentId";
const invalidToken: string = "expired/invalid acessToken";
const statusCode200: number = 200;
const statusCode400: number = 400;
const statusCode403: number = 403;
const statusCode404: number = 404;

describe("Comments API Tests", () => {
  beforeAll(async (): Promise<void> => {
    //Register User
    try {
      const userData: CreateUserDTO = {
        username,
        email,
        password,
      };

      const registerUserResponse = await request(app)
        .post(`${uri}/users`)
        .send(userData);

      console.log("registerUserResponse", registerUserResponse.body);
    } catch (error) {
      console.log("register User Error:", error);
    }

    //Login user
    const loginData: LoginDTO = {
      username,
      password,
    };
    const loginResponse = await request(app)
      .post(`${uri}/users/login`)
      .send(loginData);

    token = loginResponse.body.accessToken;

    //Create Post
    const postData: CreatePostDTO = {
      userId: username,
      title: "criar um post",
      text: "teste criar um post",
      link: "",
      postType: "text",
    };

    await request(app)
      .post(`${uri}/posts`)
      .set("Content-Type", "application/json")
      .set("Authorization", token)
      .send(postData);

    //Get Recent Posts
    const getRecentPost = await request(app)
      .get(`${uri}/posts/recent`)
      .set("Content-Type", "application/json")
      .set("Authorization", token);

    slug = getRecentPost.body.posts?.[0].slug; // Extracts the slug of the most recent post

    //Creating a comment
    await request(app)
      .post(`${uri}/comments/?slug=${slug}`) // Appends the slug to the query string
      .set("Content-Type", "application/json")
      .set("Authorization", token)
      .send({
        comment: "Testing comment text", // Text content of the comment
      });

    //Get Comments by Slug
    const commentsListResponse = await request(app)
      .get(`${uri}/comments/?slug=${slug}`)
      .set("Content-Type", "application/json")
      .send();

    commentId = commentsListResponse.body.comments?.[0].commentId;
  });

  // Test GET /api/v1/comments/?slug={slug}
  test("Get Comments by Post Slug (success)", async (): Promise<void> => {
    // Act
    const response = await request(app).get(`${uri}/comments/?slug=${slug}`);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
    expect(response.body.comments).toBeDefined(); // Check if the comments list is defined
    expect(response.body.comments.length).toBeGreaterThan(0); // Check if there is at least one comment
  });

  test("Get Comments by Post Slug (Error - Invalid slug parameter)", async (): Promise<void> => {
    // Act
    const response = await request(app).get(
      `${uri}/comments/?slug=${invalidSlug}`
    );

    // Assert
    expect(response.statusCode).toBe(statusCode404);
  });

  test("Get Comments by Post Slug (Error - Empty slug parameter)", async (): Promise<void> => {
    // Act
    const response = await request(app).get(
      `${uri}/comments/?slug=${emptySlug}`
    );

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Slug parameter must not be empty");
  });

  test("Get Comments by Post Slug (Error - Missing slug parameter)", async (): Promise<void> => {
    // Act
    const response = await request(app).get(`${uri}/comments`);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Slug parameter must be provided");
  });

  test("Get Comments by Post Slug (Error - Expired/Invalid token)", async (): Promise<void> => {
    // Act
    const response = await request(app)
      .get(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", invalidToken); // Set Authorization header with expired/invalid token;

    // Assert
    expect(response.statusCode).toBe(statusCode403);
  });

  // Test POST /api/v1/comments/?slug={slug}
  test("Reply To Post (success - comment length >= 20 <= 10000)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "This is a test comment",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
  });

  test("Reply To Post (success - comment length = 20 chars)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "Lorem ipsum blandit.",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
  });

  test("Reply To Post (success - comment length = 10000 chars)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: bigText10000char,
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
  });

  test("Reply To Post (Error - comment length < 20 chars)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "< 20 chars",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Comment length >= 20 <= 10000");
  });

  test("Reply To Post (Error - comment length > 10000)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: bigText10010char,
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Comment length >= 20 <= 10000");
  });

  test("Reply To Post (Error - missing comment)", async () => {
    //Arrange
    const commentData = {
      slug,
      userId: username,
      //Missing comment property
    };
    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("A comment must be provided");
  });

  test("Reply To Post (Error - empty comment)", async () => {
    //Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "", //Empty comment property,
    };
    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Comment must not be empty");
  });

  test("Reply To Post (Error - Invalid slug parameter)", async () => {
    //Arrange
    const commentData = {
      userId: username,
      comment: "This is a test comment",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${invalidSlug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode404);
  });

  test("Reply To Post (Error - Missing slug parameter)", async () => {
    //Arrange
    const commentData = {
      userId: username,
      comment: "This is a test comment",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments`) //Missing slug parameter
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Slug parameter must be provided");
  });

  test("Reply To Post (Error - Empty slug parameter)", async () => {
    //Arrange
    const commentData = {
      userId: username,
      comment: "This is a test comment",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${emptySlug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Slug parameter must not be empty");
  });

  test("Reply To Post (Error - Expired/Invalid acessToken)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "This is a test comment",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      .set("Authorization", invalidToken) // Set Authorization header with a invalid token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode403);
  });

  test("Reply To Post (Error - Missing token)", async () => {
    // Arrange
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "This is a test comment",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/?slug=${slug}`)
      //Authorization header without token
      .send(commentData);

    // Assert
    expect(response.statusCode).toBe(statusCode403);
  });

  //Test POST /api/v1/comments/:commentId/reply
  test("Reply to a comment (success - comment length >= 20 <= 10000))", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
  });

  test("Reply to a comment (success - comment length = 20 chars)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "Lorem ipsum blandit.",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
  });

  test("Reply to a comment (success - comment length = 10000 chars)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: bigText10000char,
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode200);
  });

  test("Reply to a comment (Error - comment length < 20 chars)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "< 20 chars",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Comment length >= 20 <= 10000");
  });

  test("Reply to a comment (Error - comment length > 10000 chars)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: bigText10010char,
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Comment length >= 20 <= 10000");
  });

  test("Reply to a comment (Error - missing comment)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData = {
      slug,
      userId: username,
      //Missing comment property
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("A comment must be provided");
  });

  test("Reply to a comment (Error - empty comment)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Comment must not be empty");
  });

  test("Reply to a comment (Error - Invalid slug parameter)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData = {
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${invalidSlug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode404);
  });

  test("Reply to a comment (Error - empty slug parameter)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData = {
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${emptySlug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Slug parameter must not be empty");
  });

  test("Reply to a comment (Error - missing slug parameter)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData = {
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply`) //Missing slug parameter
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode400);
    expect(response.body.message).toBe("Slug parameter must be provided");
  });

  test("Reply to a comment (Error - invalid commentId))", async () => {
    // Arrange
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${invalidCommentId}/reply?slug=${slug}`)
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode404);
  });

  test("Reply to a comment (Error - missing/empty commentID))", async () => {
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/reply?slug=${slug}`) //Missing commentId parameter
      .set("Authorization", token) // Set Authorization header with token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode404);
  });

  test("Reply to a comment (Error - Expired/Invalid acessToken)", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      .set("Authorization", invalidToken) // Set Authorization header with a invalid token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode403);
  });

  test("Reply to a comment (Error - missing token))", async () => {
    // Arrange (Assuming you have a comment ID)
    const replyData: ReplyToCommentDTO = {
      slug,
      userId: username,
      comment: "This is a reply to the comment",
      parentCommentId: "",
    };

    // Act
    const response = await request(app)
      .post(`${uri}/comments/${commentId}/reply?slug=${slug}`)
      //Authorization header without token
      .send(replyData);

    // Assert
    expect(response.statusCode).toBe(statusCode403);
  });
});
