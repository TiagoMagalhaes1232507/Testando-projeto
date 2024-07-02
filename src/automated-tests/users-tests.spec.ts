// (RR) este ficheiro é para desenvolver os testes
// e depois para exportar para o ficheiro users-tests.ts (recomendado pelo prof. Baltarejo)
import request from "supertest";

// ## 2- Request: GET / Get current user

let accessToken: string;
const url: string = "http://localhost:5001";

describe("Users Endpoint", () => {

  test("Create User should return status 200", async () => {
    // arrange: define os detalhes do usuário a serem enviados na requisição
    const uri = "/api/v1/users";
    const expected = 200;
    //act
    try { 
      const res = await request(url)
      .post(uri)
      .send({
        username: "testuser",
        email: "testuser@test.com",
        password: "testuser",
      });
  } catch (error) {
    console.log("Create User Error:", error);
  }
  });

  test("Checking authorization after login and after logout", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuser",
      password: "testuser",
    });
    accessToken = loginResponse.body.accessToken;

    //arrange
    const uri = "/api/v1/users/me";
    const expected = 200;
    //act
    const res = await request(url).get(uri).set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);

    const logoutResponse = await request(url).post("/api/v1/users/logout").set("Authorization", accessToken);

    const res2 = await request(url).get(uri).set("Authorization", accessToken);
    //assert
    expect(res2.status).toEqual(403);
  });

  test("Get User by Username should status 200", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;
    //arrange
    const uri = "/api/v1/users/testuseralpha";
    const expected = 200;
    //act
    const res = await request(url)
    .get(uri)
    .set("Authorization", accessToken)
    .send({username: "testuseralpha"});
    //assert
    expect(res.status).toEqual(expected);

  });

  test("Refresh access token should status 200", async () => {
    const refreshAccessTokenResponse = await request(url).post("/api/v1/users/token/refresh")
  })
  
});
