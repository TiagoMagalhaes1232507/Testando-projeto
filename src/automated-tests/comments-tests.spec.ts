// // (RR) este ficheiro é para desenvolver os testes
// // e depois para exportar para o ficheiro comments-tests.ts (recomendado pelo prof. Baltarejo)

import request from "supertest";

let accessToken: string; //Declares a variable to store the access token
const url: string = "http://localhost:5001"; //Define a URL base para as requisições

describe("Comments Endpoint", () => {
  let comment: any = {};

  beforeAll(async (): Promise<void> => {
    //Creat a user
    try {
      const createUserResponse = await request(url).post("/api/v1/users").send({
        username: "testuseralpha",
        email: "testuseralpha@test.com",
        password: "testuseralpha",
      });

      const createUser = createUserResponse.body;
      console.log("Create User Response Body:", createUser);
    } catch (error) {
      console.log("Create User Error:", error);
    }
    //Do login
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      //Make a POST request to the login endpoint and send the credentials
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken; //Stores the access token obtained in the login response

    //Creating a post
    await request(url)
      .post("/api/v1/posts")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        title: "Testing creat a post",
        text: "Testing creat a post text",
        userId: "testuseralpha",
        postType: "text",
      });

    //Get a recent post
    const getRecentPost = await request(url)
      .get("/api/v1/posts/recent")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    const slug = getRecentPost.body.posts[0].slug;

    //Creating a comment
    await request(url)
      .post("/api/v1/comments?slug=" + slug)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "Testing comment text",
      });

    const getCommentsResponse = await request(url)
      .get("/api/v1/comments/?slug=" + slug)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    comment = getCommentsResponse.body.comments[0];
  });

  test("Get Comment by Comment Id should return status 200 for a valid comment ID", async () => {
    expect(comment.commentId).toBeDefined();
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = `/api/v1/comments/${comment.commentId}`;
    const expected = 200;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
  });

  test("Get Comment by Comment Id should return status 404 for an invalid comment ID", async () => {
    //arrange
    const uri = "/api/v1/comments/wrongID";
    const expected = 404;
    //act
    const res = await request(url).get(uri);

    //assert
    expect(res.status).toEqual(expected);
  });

  test("Upvote Comment should return status 200 when upvoting an existing comment", async () => {
    //arrange
    const uri = "/api/v1/comments/" + comment.commentId + "/upvote";
    const expected = 200;
    //act: makes a POST request to the upvote endpoint with the authorization token
    const res = await request(url).post(uri).set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Upvote Comment should return status 404 when upvoting a non-existent comment", async () => {
    //arrange
    const uri = "/api/v1/comments/wrongIDupvote";
    const data = { userId: "testuseralpha" };
    const expected = 404;
    //act
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Downvote Comment should return status 200 when downvoting an existing comment", async () => {
    //arrange
    const uri = "/api/v1/comments/" + comment.commentId + "/downvote";
    const expected = 200;
    //act
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Downvote Comment should return status 404 when downvoting non-existent comment", async () => {
    //arrange
    const uri = "/api/v1/comments/wrongIDupvote";
    const expected = 404;
    //act
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
  });
});
