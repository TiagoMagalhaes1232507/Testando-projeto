// // (RR) este ficheiro é para desenvolver os testes
// // e depois para exportar para o ficheiro comments-tests.ts (recomendado pelo prof. Baltarejo)

import request from "supertest";

let accessToken: string; //Declares a variable to store the access token
const url: string = "http://localhost:5001"; //Defines the base URL for the requests

describe("Comments Endpoint", () => {
  let comment: any = {}; // Variable to store the comment details
  let slug: string = "";

  beforeAll(async (): Promise<void> => {
    // This function runs before all tests in the describe block

    // Create a user
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

    // Log in the user
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      // Make a POST request to the login endpoint and send the credentials
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken; // Stores the access token obtained in the login response

    // Creating a post
    await request(url)
      .post("/api/v1/posts")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken) // Adds the access token to the request header
      .send({
        title: "Testing creat a post",
        text: "Testing creat a post text",
        userId: "testuseralpha",
        postType: "text",
      });

    // Get a recent post
    const getRecentPost = await request(url)
      .get("/api/v1/posts/recent")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    slug = getRecentPost.body.posts[0].slug; // Extracts the slug of the most recent post

    // Creating a comment
    await request(url)
      .post("/api/v1/comments?slug=" + slug) // Appends the slug to the query string
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "Testing comment text", // Text content of the comment
      });

    const getCommentsResponse = await request(url)
      .get("/api/v1/comments/?slug=" + slug)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    comment = getCommentsResponse.body.comments[0]; // Stores the first comment from the response
  });

  //CTC01
  test("Get Comment by Slug should return status 200 for a valid post slug", async () => {
    // arrange: define a URI to get the comment using the post slug
    const uri = "/api/v1/comments/?slug=" + slug;
    const expected = 200;
    // act: make a GET request to the defined endpoint
    const res = await request(url).get(uri).set("Authorization", accessToken); // Add the access token to the request header
    // assert: check if the response status is the same as expected
    expect(res.status).toEqual(expected);
    expect(res.body.comments).toBeDefined(); // Check if the comments list is defined
    expect(res.body.comments[0].text).toEqual("Testing comment text"); // // Check if the text of the first comment returned in the response is equal to "Testing comment text"
    expect(res.body.comments.length).toBeGreaterThan(0); // Check if there is at least one comment
  });


  //CTC02
  test("Get Comment by Slug return status 404 for a invalid post slug", async () => {
    // arrange: define a URI to get the comment using an invalid post slug
    const invalidSlug = "invalidSlug";
    const uri = "/api/v1/comments/" + invalidSlug;
    const expected = 404;
    // act: make a GET request to the defined endpoint
    const res = await request(url).get(uri).set("Authorization", accessToken); // Add the access token to the request header
    // assert: check if the response status is the same as expected
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("Couldn't find a comment by comment id {invalidSlug}."); 
  });


  //CTC03
  test("Get Comment by Comment Id should return status 200 for a valid comment ID", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = `/api/v1/comments/${comment.commentId}`;
    const expected = 200;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
  
  });

  //CTC04
  test("Get Comment by Comment Id should return status 404 for an invalid comment ID", async () => {
    //arrange
    const uri = "/api/v1/comments/wrongID";
    const expected = 404;
    //act
    const res = await request(url).get(uri);

    //assert
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("Couldn't find a comment by comment id {wrongID}.");
  });


  //CTC05
  test("Get Comment by Comment Id should return status 500 Internal server error missging comment Id", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = `/api/v1/comments/`;
    const expected = 500;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("An unexpected error occurred.");

  });


  //CTC06
  test("Upvote Comment should return status 200 when upvoting an existing comment", async () => {
    //arrange
    const uri = "/api/v1/comments/" + comment.commentId + "/upvote";
    const expected = 200;
    //act: makes a POST request to the upvote endpoint with the authorization token
    const res = await request(url).post(uri).set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
    expect(res.text).toEqual("OK");
  });
  

  //CTC07
  test("Upvote Comment should return status 404 when upvoting a non-existent comment", async () => {
    //arrange
    const uri = "/api/v1/comments/wrongID/upvote";
    const data = { userId: "testuseralpha" };
    const expected = 404;
    //act
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("Couldn't find a comment with id {wrongID}.");
  });

  //CTC08
  test("Upvote Comment should return status 500 as it is missing token", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = `/api/v1/comments/`;
    const expected = 500;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri)
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("An unexpected error occurred."); 
  });

  //CTC09
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
    expect(res.text).toEqual("OK");
  });

  //CTC010
  test("Downvote Comment should return status 404 when downvoting non-existent comment", async () => {
    //arrange
    const uri = "/api/v1/comments/wrongID/upvote";
    const expected = 404;
    //act
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("Couldn't find a comment with id {wrongID}.");
  });

  //CTC011
  test("Downvote Comment should return status 500 as it is missing token", async () => {
    expect(comment.commentId).toBeDefined(); // Ensures the comment ID is defined
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = `/api/v1/comments/`;
    const expected = 500;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
    expect(res.body.message).toEqual("An unexpected error occurred."); 
  });


  //Black box testing - Equivalence classes
  //CTC012
  test("Create comment with valid comment length - more than 20 and less 10.000 characters - should return status 200", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 200;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "In today's digital age, information technology (IT) professionals have become indispensable to the functioning and growth of virtually every industry. ",
      });
    expect(res.status).toEqual(expected);
  });

  //CTC013
  test("Create comment with invalid comment length - less than 20 characters - should return status 500", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 500;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "0",
      });
    expect(res.status).toEqual(expected);
  });

  //CTC014
  test("Creating a comment with empty comment should return status 500", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 500;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "",
      });
    expect(res.status).toEqual(expected);
  });

  //CTC015
  test("Creating a comment with empty body should return status 500", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 500;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
      });
    expect(res.status).toEqual(expected);
  });

  //CTC016
  test("Create comment with invalid link length should return status 500", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 500;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        link: "a",
      });
    expect(res.status).toEqual(expected);
  });

  // Limit Value Tests

  //Valid Comment Lower Limit

  //CTC017
  test("Create comment with exactly 20 characters should return status 200", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 200;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "12345678901234567890",
      });
    expect(res.status).toEqual(expected);
  });


//Valid Comment Upper Limit
//CTC018
  test("Create comment with exactly 10.000 characters should return status 200", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 200;
    const longComment = "a".repeat(10000); // String with 10.000 caracteres
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: longComment,
      });
    expect(res.status).toEqual(expected);
  });

  //CTC019 - BUG REPORT - API is not validating comment length correctly.
  test("Create comment with 19 characters (just below the limit) should return status 500", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 500;
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: "1234567890123456789", // 19 caracteres
      });
    expect(res.status).toEqual(expected);
  });

  //CTC020 
  test("Create comment with 10001 characters (just above the limit) should return status 500", async () => {
    const uri = "/api/v1/comments?slug=" + slug;
    const expected = 500;
    const longComment = "a".repeat(10001); // 10.001 caracteres
    const res = await request(url)
      .post(uri)
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send({
        comment: longComment,
      });
    expect(res.status).toEqual(expected);
  });

});
