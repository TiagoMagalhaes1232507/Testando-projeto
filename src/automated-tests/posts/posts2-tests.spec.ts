import request from "supertest";
import { TextPostDto } from "./testTypes";
import { CreateUserDto } from "./testTypes";
import { LoginUserDto } from "./testTypes";

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

  // Populating a user
  const createUser: CreateUserDto = {
    username: "testuser",
    email: "testuser@test.com",
    password: "testuserpass",
  };

  // Populating a login
  const loginUser: LoginUserDto = {
    username: "testuser",
    password: "testuserpass",
  };

  beforeAll(async (): Promise<void> => {
    // Create a user
    try {
      const createUserResponse = await request(url)
        .post("/api/v1/users")
        .send(createUser);
      const createdUser = createUserResponse.body;
      console.log("Create User Response Body:", createdUser);
    } catch (error) {
      console.log("Create User Error:", error);
    }

    // Log in the user
    const loginResponse = await request(url)
      .post("/api/v1/users/login")
      .send(loginUser);
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
    test("CTP29 - should return status 200", async () => {
      const uri = `/api/v1/posts/?slug=${slug}`;
      const expected = 200;
      const res = await request(url).get(uri).set("Authorization", accessToken);

      expect(res.status).toEqual(expected);
      expect(res.body.post.slug).toEqual(slug);
      expect(res.body.post.title).toEqual(postData.title);
    });

    test("CTP30 - should return status 404 for invalid slug", async () => {
      const uri = `/api/v1/posts/?slug=invalid-slug`;
      const expected = 404;
      const res = await request(url).get(uri).set("Authorization", accessToken);

      expect(res.status).toEqual(expected);
      expect(res.body.message).toEqual(
        "Couldn't find a post by slug {invalid-slug}."
      );
    });

    test("CTP31 - should return status 404 for server error", async () => {
      const uri = `/api/v1/errorRoute/?slug=${slug}`;
      const expected = 404;
      const res = await request(url).get(uri).set("Authorization", accessToken);
      expect(res.status).toEqual(expected);
      expect(res.text).toContain(`Cannot GET ${uri}`);
    });
  });

  // Function that extracts the number of votes of a specific post
  async function getPostPointsBySlug(slug: string): Promise<number> {
    const uri = `/api/v1/posts/?slug=${slug}`;
    const res = await request(url).get(uri).set("Authorization", accessToken);

    return res.body.post.points;
  }

  // Function that checks if a post was upvoted by the current user
  async function getIsVotedByMe(slug: string): Promise<boolean> {
    const uri = `/api/v1/posts/?slug=${slug}`;
    const res = await request(url).get(uri).set("Authorization", accessToken);

    return res.body.post.wasUpvotedByMe;
  }

  describe("POST / Downvote Post", () => {
    test("CTP32 - should return status 200 and decrement points after downvote", async () => {
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
      expect(updatedVotesNumber).toBeLessThan(previousVotesNumber);
    });

    test("CTP33 - should return status 403 for expired token", async () => {
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

    test("CTP34 - should return status 404 for non-existent post", async () => {
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
