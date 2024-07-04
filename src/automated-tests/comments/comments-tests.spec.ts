import request from "supertest";
import { CreateUserDTO } from "../../modules/users/useCases/createUser/CreateUserDTO";
import { LoginDTO } from "../../modules/users/useCases/login/LoginDTO";
import { CreatePostDTO } from "../../modules/forum/useCases/post/createPost/CreatePostDTO";
import { ReplyToPostDTO } from "../../modules/forum/useCases/comments/replyToPost/ReplyToPostDTO";

const url: string = "http://localhost:5001";
const username: string = "testuseralpha";
const password: string = "testuseralpha";
const email: string = "testuseralpha@.testuseralpha.com";
let accessToken: string;
let slug: string;
let comment: any = {};
let commentId: string = "";
const invalidCommentId: string = "invalidCommentId";
const invalidToken: string = "expired/invalid acessToken";
const statusCode200: number = 200;
const statusCode400: number = 400;
const statusCode403: number = 403;
const statusCode404: number = 404;
const statusCode401: number = 401;

describe("Comments API Tests", () => {
  beforeAll(async (): Promise<void> => {
    //Register User
    try {
      const userData: CreateUserDTO = {
        username,
        email,
        password,
      };

      const registerUserResponse = await request(url)
        .post("/api/v1/users")
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
    const loginResponse = await request(url)
      .post("/api/v1/users/login")
      .send(loginData);

    accessToken = loginResponse.body.accessToken;

    //Create Post
    const postData: CreatePostDTO = {
      userId: username,
      title: "Testing creat a post",
      text: "Testing creat a post text",
      link: "",
      postType: "text",
    };

    await request(url)
      .post("/api/v1/posts")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send(postData);

    //Get Recent Posts
    const getRecentPost = await request(url)
      .get("/api/v1/posts/recent")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    slug = getRecentPost.body.posts?.[0].slug; // Extracts the slug of the most recent post

    //Creating a comment
    await request(url)
      .post(`/api/v1/comments?slug=${slug}`) // Appends the slug to the query string
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "Testing comment text", // Text content of the comment
      });

    //Get Comments by Slug
    const getCommentsListResponse = await request(url)
      .get(`/api/v1/comments/?slug=${slug}`)
      .set("Content-Type", "application/json")
      .send();

    comment = getCommentsListResponse.body.comments[0];
  });

  //CTC032
  test("Get Comment by CommentId should return status 200 for a valid commentID", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange:
    const uri = `/api/v1/comments/${comment.commentId}`;
    const expectedMessage = "0008a1bf-91c9-4544-9dd2-90c25f1a5020";
    //act:
    const res = await request(url).get(uri);
    //assert:
    expect(res.statusCode).toEqual(statusCode200);
    expect(res.body.comment.commentId).toEqual(expectedMessage);
  });

  //CTC033
  test("Get Comment by Comment Id should return status 404 for an invalid comment ID", async () => {
    //arrange:
    const uri = "/api/v1/comments/wrongID";
    const expectedMessage = "Couldn't find a comment by comment id {wrongID}.";
    //act:
    const res = await request(url).get(uri);
    //assert:
    expect(res.statusCode).toEqual(statusCode404);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //CTC034
  test("Get Comment by Comment Id should return status 400 missing comment Id", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange:
    const uri = `/api/v1/comments/`;
    const expectedMessage = "CommentID parameter must not be empty"; //Message suggestion:
    //act:
    const res = await request(url).get(uri);
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //Function that extracts the number of votes of a specific post
  async function getCommentPointsById(id: string) {
    const uri = `/api/v1/comments/${comment.commentId}`;
    const res = await request(url).get(uri).set("Authorization", accessToken);

    return res.body.comment.points;
  }

  //CTC035
  test("Upvote comment should return status 200 and increment points after upvote", async () => {
    // Get the current points before the upvote
    const previousVotesNumber = await getCommentPointsById(comment.commentId);
    console.log("menos aqui", previousVotesNumber);

    // Trigger the upvote endpoint
    //arrange:
    const uri = "/api/v1/comments/" + comment.commentId + "/upvote";
    const expectedMessage = "OK";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Authorization", accessToken)
      .set("Content-Type", "application/json");

    // assert: Validate the response status and message
    expect(res.statusCode).toEqual(statusCode200);
    expect(res.text).toEqual(expectedMessage);

    // Get the updated points after upvoting
    const updatedVotesNumber = await getCommentPointsById(comment.commentId);
    console.log("mais aqui", updatedVotesNumber);

    // Validate that the points have been incremented
    expect(updatedVotesNumber).toBeGreaterThan(previousVotesNumber);
  });

  //CTC036
  test("Upvote Comment should return status 200 when upvoting an existing comment", async () => {
    //arrange:
    const uri = "/api/v1/comments/" + comment.commentId + "/upvote";
    const expectedMessage = "OK";
    //act:
    const res = await request(url).post(uri).set("Authorization", accessToken);
    //assert:
    expect(res.statusCode).toEqual(statusCode200);
    expect(res.text).toEqual(expectedMessage);
  });

  //CTC037
  test("Upvote Comment should return status 404 when upvoting a non-existent comment", async () => {
    //arrange:
    const uri = "/api/v1/comments/wrongID/upvote";
    const expectedMessage = "Couldn't find a comment with id {wrongID}.";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert:
    expect(res.statusCode).toEqual(statusCode404);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //CTC038
  test("Upvote Comment should return status 401 as it is missing token", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange:
    const uri = "/api/v1/comments/";
    const expectedMessage = "AccessToken parameter must not be empty"; //Message suggestion:
    //act:
    const res = await request(url).get(uri);
    //assert:
    expect(res.statusCode).toEqual(statusCode401);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //CTC039
  test("Upvote Comment should return status 403 for expired token", async () => {
    //arrange:
    const uri = "/api/v1/comments/" + comment.commentId + "/upvote";
    const expiredToken = "expiredAccessToken";
    const expectedMessage = "Token signature expired.";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Authorization", expiredToken)
      .set("Content-Type", "application/json");
    //assert:
    expect(res.statusCode).toEqual(statusCode403);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //CTC040
  test("Downvote comment should return status 200 and increment points after downvote", async () => {
    // Get the current points before the upvote
    const previousVotesNumber = await getCommentPointsById(comment.commentId);

    // Trigger the upvote endpoint
    //arrange:
    const uri = "/api/v1/comments/" + comment.commentId + "/downvote";
    const expectedMessage = "OK";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Authorization", accessToken)
      .set("Content-Type", "application/json");
    // assert: Validate the response status and message
    expect(res.statusCode).toEqual(statusCode200);
    expect(res.text).toEqual(expectedMessage);

    // Get the updated points after upvoting
    const updatedVotesNumber = await getCommentPointsById(comment.commentId);

    // Validate that the points have been incremented
    expect(updatedVotesNumber).toBeLessThan(previousVotesNumber);
  });

  //CTC041
  test("Downvote Comment should return status 200 when downvoting an existing comment", async () => {
    //arrange:
    const uri = "/api/v1/comments/" + comment.commentId + "/downvote";
    const expectedText = "OK";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert:
    expect(res.statusCode).toEqual(statusCode200);
    expect(res.text).toEqual(expectedText);
  });

  //CTC042
  test("Downvote Comment should return status 404 when downvoting non-existent comment", async () => {
    //arrange:
    const uri = "/api/v1/comments/wrongID/upvote";
    const expectedMessage = "Couldn't find a comment with id {wrongID}.";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert:
    expect(res.statusCode).toEqual(statusCode404);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //CTC043
  test("Downvote Comment should return status 401 as it is missing token", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange:
    const uri = `/api/v1/comments/`;
    const expectedMessage = "AccessToken parameter must not be empty"; //Message suggestion:
    //act:
    const res = await request(url).get(uri);
    //assert:
    expect(res.statusCode).toEqual(statusCode401);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //CTC044
  test("Downvote Comment should return status 403 for expired token", async () => {
    //arrange:
    const uri = "/api/v1/comments/" + comment.commentId + "/downvote";
    const expiredToken = "expiredAccessToken";
    const expectedMessage = "Token signature expired.";
    //act:
    const res = await request(url)
      .post(uri)
      .set("Authorization", expiredToken)
      .set("Content-Type", "application/json");
    //assert:
    expect(res.statusCode).toEqual(statusCode403);
    expect(res.body.message).toEqual(expectedMessage);
  });

  //Black box testing - Equivalence classes

  //CTC045
  test("Create comment with valid comment length > 20 and < 10.000 characters - should return status 200", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment:
        "In today's digital age, information technology (IT) professionals have become indispensable to the functioning and growth of virtually every industry. ",
    };
    //assert:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({ commentData });
    //act:
    expect(res.statusCode).toEqual(statusCode200);
  });

  //CTC046
  test("Create comment with invalid comment length - < 20 charracteres - should return status 400", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    const commentData: ReplyToPostDTO = {
      slug,
      userId: username,
      comment: "0",
    };
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({ comment: commentData });
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
  });

  //CTC047
  test("Creating a comment with empty comment should return status 400", async () => {
    //arrange
    const uri = "/api/v1/comments?slug=" + slug;
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "",
      });
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
  });

  //CTC048
  test("Creating a comment with empty body should return status 400", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({});
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
  });

  //CTC049
  test("Create comment with invalid link length should return status 400", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        link: "a",
      });
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
  });

  // Limit Value Tests

  //Valid Comment Lower Limit

  //CTC050
  test("Create comment with exactly 20 characters should return status 200", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "12345678901234567890",
      });
    //assert:
    expect(res.statusCode).toEqual(statusCode200);
  });

  //Valid Comment Upper Limit
  //CTC051
  test("Create comment with exactly 10.000 characters should return status 200", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    const longComment = "a".repeat(10000); // String with 10.000 caracteres
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: longComment,
      });
    //assert:
    expect(res.statusCode).toEqual(statusCode200);
  });

  //CTC052 - BUG REPORT - API is not validating comment length correctly.
  test("Create comment with 19 characters (just below the limit) should return status 400", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "1234567890123456789", // 19 caracteres
      });
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
  });

  //CTC053
  test("Create comment with 10001 characters (just above the limit) should return status 400", async () => {
    //arrange:
    const uri = "/api/v1/comments?slug=" + slug;
    const longComment = "a".repeat(10001); // 10.001 caracteres
    //act:
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: longComment,
      });
    //assert:
    expect(res.statusCode).toEqual(statusCode400);
  });
});
