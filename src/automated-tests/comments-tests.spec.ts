// // (RR) este ficheiro é para desenvolver os testes
// // e depois para exportar para o ficheiro comments-tests.ts (recomendado pelo prof. Baltarejo)

import request from "supertest";

let accessToken: string; //Declares a variable to store the access token
const url: string = "http://localhost:5001"; //Define a URL base para as requisições
let creatPost: string;
describe("Comments Endpoint", () => {
  beforeAll(async (): Promise<void> => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      //Make a POST request to the login endpoint and send the credentials
      username: "lucena",
      password: "lucena",
    });
    console.log("Login Response Body:", loginResponse.body);
    accessToken = loginResponse.body.accessToken; //Stores the access token obtained in the login response
  });

  test("Get Comment by Comment Id should return status 200 for a valid comment ID", async () => {
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = "/api/v1/comments/fdb089d1-f0ea-4e36-92f3-f743b080b040";
    const expected = 200;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
  });

  test("Get Comment by Comment Id should return status 404 for an invalid comment ID", async () => {
    //arrange
    const uri = "/api/v1/comments/fdb089d1-f0ea-4e36";
    const expected = 404;
    //act
    const res = await request(url).get(uri);

    //assert
    expect(res.status).toEqual(expected);
  });

  test("Upvote Comment should return status 200 when upvoting an existing comment", async () => {
    //arrange
    const uri = "/api/v1/comments/fdb089d1-f0ea-4e36-92f3-f743b080b040/upvote";
    const expected = 200;
    //act: makes a POST request to the upvote endpoint with the authorization token
    const res = await request(url).post(uri).set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Upvote Comment should return status 404 when upvoting a non-existent comment", async () => {
    //arrange
    const uri = "/api/v1/comments/fdb089d1-f0ea-4e36/upvote";
    const data = { userId: "lucena" };
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
    const uri =
      "/api/v1/comments/fdb089d1-f0ea-4e36-92f3-f743b080b040/downvote";
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
    const uri = "/api/v1/comments/fdb089d1-f0ea-4e36-92f0/downvote";
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
