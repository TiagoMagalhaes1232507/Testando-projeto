import request from "supertest";
import { TextPostDto } from "./testTypes";

let accessToken: string; // Declares a variable to store the access token
const url: string = "http://localhost:5001"; // Defines the base URL for the requests

describe("Posts Endpoints", () => {
  let slug: string;

  // Populating a post
  const postData: TextPostDto = {
    title: "Testing creating a post",
    text: "Testing creating a post text",
    userId: "testuser",
    postType: "text",
  };

  beforeAll(async (): Promise<void> => {
    // This function runs before all tests in the describe block

    // Create a user
    try {
      const createUserResponse = await request(url).post("/api/v1/users").send({
        username: "testuser",
        email: "testuser@test.com",
        password: "testuserpass",
      });

      const createUser = createUserResponse.body;
      console.log("Create User Response Body:", createUser);
    } catch (error) {
      console.log("Create User Error:", error);
    }

    // Log in the user
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      // Make a POST request to the login endpoint and send the credentials
      username: "testuser",
      password: "testuserpass",
    });
    accessToken = loginResponse.body.accessToken; // Stores the access token obtained in the login response

    await request(url)
      .post("/api/v1/posts")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken) // Adds the access token to the request header
      .send(postData);

    // Get a recent post
    const recentPost = await request(url)
      .get("/api/v1/posts/recent")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    slug = recentPost.body.posts[0].slug; // Extracts the slug of the most recent post
  });
  describe("GET / Get post by slug", () => {
    test("should return status 200", async () => {
      const uri = `/api/v1/posts/?slug=${slug}`;
      const expected = 200;
      const res = await request(url).get(uri).set("Authorization", accessToken);

      expect(res.status).toEqual(expected);
      expect(res.body.post.slug).toEqual(slug);
      expect(res.body.post.title).toEqual(postData.title);
    });

    test("should return status 404 for invalid slug", async () => {
      const uri = `/api/v1/posts/?slug=invalid-slug`;
      const expected = 404;
      const res = await request(url).get(uri).set("Authorization", accessToken);

      expect(res.status).toEqual(expected);
      expect(res.body.message).toEqual(
        "Couldn't find a post by slug {invalid-slug}."
      );
    });

    test("should return status 500 for server error", async () => {
      const uri = `/api/v1/errorRoute/?slug=${slug}`;
      const expected = 500;
      const res = await request(url).get(uri).set("Authorization", accessToken);
      expect(res.status).toEqual(expected);
      expect(res.text).toContain("Cannot GET /api/v1/errorRoute/");
    });
  });

  //Function that extracts the number of votes of a specific post
  async function getPostPointsBySlug(slug: string) {
    const uri = `/api/v1/posts/?slug=${slug}`;
    const res = await request(url).get(uri).set("Authorization", accessToken);

    return res.body.post.points;
  }

  describe("POST / Upvote Post", () => {
    test("should return status 200 and increment points after upvote", async () => {
      // Get the current points before the upvote
      const previousVotesNumber = await getPostPointsBySlug(slug);

      // Trigger the upvote endpoint
      const uri = "/api/v1/posts/upvote";
      const expectedStatus = 200;
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({
          slug: slug,
        });

      // Validate the response status and message
      expect(res.status).toEqual(expectedStatus);
      expect(res.text).toEqual("OK");

      // Get the updated points after upvoting
      const updatedVotesNumber = await getPostPointsBySlug(slug);

      // Validate that the points have been incremented
      //NOTA: SOLUÇÃO PARA O LIMITE DE 2 VOTOS E PARA O PROBLEMA DE PERCEBER QUANTOS VOTOS POR USER PODEM SER FEITOS
      expect(updatedVotesNumber).toBeGreaterThan(previousVotesNumber);
    });

    test("should return status 403 for expired token", async () => {
      const uri = "/api/v1/posts/upvote";
      const expected = 403;
      const expiredToken = "expiredAccessToken";
      const res = await request(url)
        .post(uri)
        .set("Authorization", expiredToken)
        .set("Content-Type", "application/json")
        .send({
          slug: slug,
        });

      expect(res.status).toEqual(expected);
      expect(res.body.message).toEqual("Token signature expired.");
    });

    test("should return status 404 for non-existent post", async () => {
      const uri = "/api/v1/posts/upvote";
      const expected = 404;
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({
          slug: "non-existent-slug",
        });

      expect(res.status).toEqual(expected);
      expect(res.body.message).toEqual(
        "Couldn't find a post by slug {non-existent-slug}."
      );
    });
  });

  describe("POST / Downvote Post", () => {
    test("should return status 200 and decrement points after downvote", async () => {
      // Get the current points before the upvote
      const previousVotesNumber = await getPostPointsBySlug(slug);

      // Trigger the upvote endpoint
      const uri = "/api/v1/posts/downvote";
      const expectedStatus = 200;
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({
          slug: slug,
        });

      // Validate the response status and message
      expect(res.status).toEqual(expectedStatus);
      expect(res.text).toEqual("OK");

      // Get the updated points after upvoting
      const updatedVotesNumber = await getPostPointsBySlug(slug);

      // Validate that the points have been incremented
      //NOTA: SOLUÇÃO PARA O LIMITE DE 2 VOTOS E PARA O PROBLEMA DE PERCEBER QUANTOS VOTOS POR USER PODEM SER FEITOS
      expect(updatedVotesNumber).toBeLessThan(previousVotesNumber);
    });

    test("should return status 403 for expired token", async () => {
      const uri = "/api/v1/posts/downvote";
      const expected = 403;
      const expiredToken = "expiredAccessToken";
      const res = await request(url)
        .post(uri)
        .set("Authorization", expiredToken)
        .set("Content-Type", "application/json")
        .send({
          slug: slug,
        });

      expect(res.status).toEqual(expected);
      expect(res.body.message).toEqual("Token signature expired.");
    });

    test("should return status 404 for non-existent post", async () => {
      const uri = "/api/v1/posts/downvote";
      const expected = 404;
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({
          slug: "non-existent-slug",
        });

      expect(res.status).toEqual(expected);
      expect(res.body.message).toEqual(
        "Couldn't find a post by slug {non-existent-slug}."
      );
    });
  });
});
