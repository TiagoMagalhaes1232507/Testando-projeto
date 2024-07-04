import request from "supertest";
import { TextPostDto } from "./testTypes";
import { CreateUserDto } from "./testTypes";
import { LoginUserDto } from "./testTypes";

let accessToken: string; // Declares a variable to store the access token
const url: string = "http://localhost:5001"; // Defines the base URL for the requests

describe("Posts Endpoints", () => {
  let slug: string;
  let accessToken: string;

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
    accessToken = loginResponse.body.accessToken;

    // Create a post
    await request(url)
      .post("/api/v1/posts")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken)
      .send(postData);

    // Get the most recent post
    const recentPost = await request(url)
      .get("/api/v1/posts/recent")
      .set("Content-Type", "application/json")
      .set("Authorization", accessToken);

    slug = recentPost.body.posts[0].slug;
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

  describe("POST / Upvote Post", () => {
    test("CTP35 - should increment points after upvote", async () => {
      // ARRANGE: Get the current points before the upvote
      const previousVotesNumber = await getPostPointsBySlug(slug);

      // ACT: Trigger the upvote endpoint
      const uri = "/api/v1/posts/upvote";
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({ slug: slug });
      // Get the updated points after upvoting
      const updatedVotesNumber = await getPostPointsBySlug(slug);

      // ASSERT: Validate the response status and message
      expect(res.status).toEqual(200);
      expect(res.text).toEqual("OK");
      // Validate that the points have been incremented
      expect(updatedVotesNumber).toBeGreaterThan(previousVotesNumber);
    });

    test("CTP36 - should update the voteByMe field after upvote", async () => {
      // ACT: Trigger the upvote endpoint
      const uri = "/api/v1/posts/upvote";
      await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({ slug: slug });

      // Get the updated vote status after upvoting
      const updatedIsVotedByMe = await getIsVotedByMe(slug);

      // ASSERT: Validate that the vote status has been updated accordingly
      expect(updatedIsVotedByMe).toBe(true);
    });

    test("CTP37 - should return status 403 for expired token", async () => {
      // ARRANGE: Prepare an expired token
      const expiredToken = "expiredAccessToken";

      // ACT: Trigger the upvote endpoint with the expired token
      const uri = "/api/v1/posts/upvote";
      const res = await request(url)
        .post(uri)
        .set("Authorization", expiredToken)
        .set("Content-Type", "application/json")
        .send({ slug: slug });

      // ASSERT: Validate the response status and message
      expect(res.status).toEqual(403);
      expect(res.body.message).toEqual("Token signature expired.");
    });

    test("CTP38 - should return status 404 for non-existent post", async () => {
      // ARRANGE: Use a non-existent slug
      const nonExistentSlug = "non-existent-slug";

      // ACT: Trigger the upvote endpoint with the non-existent slug
      const uri = "/api/v1/posts/upvote";
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send({ slug: nonExistentSlug });

      // ASSERT: Validate the response status and message
      expect(res.status).toEqual(404);
      expect(res.body.message).toEqual(
        `Couldn't find a post by slug ${nonExistentSlug}.`
      );
    });

    test("CTP39 - should return status 400 if userId is included in the request body", async () => {
      // ARRANGE: Prepare the request body with an unexpected userId
      const requestBody = {
        slug: slug,
        userId: "unexpectedUserId",
      };

      // ACT: Trigger the upvote endpoint with the invalid request body
      const uri = "/api/v1/posts/upvote";
      const res = await request(url)
        .post(uri)
        .set("Authorization", accessToken)
        .set("Content-Type", "application/json")
        .send(requestBody);

      // ASSERT: Validate the response status and message
      expect(res.status).toEqual(400);
      expect(res.body.message).toEqual('"userId" is not allowed');
    });
  });
});
