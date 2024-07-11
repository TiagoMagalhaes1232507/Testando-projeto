
import request from "supertest";

const users = require("./users");
let accessToken: string;
let refreshToken: string;

const url: string = "http://localhost:5001";

describe("Users Endpoint", () => {

  beforeAll(async () => {
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
  });

  test("TCU01 - Create User should return status 200", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 200;
    const expectedMessage = "OK";

    const res = await request(url).post(uri).send({
      username: "testuserzz",
      email: "testuser@testzz.com",
      password: "testuserzz",
    });

    expect(res.body.message).toBe(expectedMessage);
    expect(res.status).toBe(expectedStatus);
  });

  test("TCU02 - Create User with username and email containing special characters", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 200;
    const expectedMessage = "OK";

    const res = await request(url).post(uri).send({
      username: "testuse_rxyz",
      email: "test_user@testxyz.com",
      password: "testuser"
    });

    expect(res.body.message).toBe(expectedMessage);
    expect(res.status).toBe(expectedStatus);
  });

  test("TCU03 - 1st Create User with invalid email should return status 400", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 400;

    const res = await request(url).post(uri).send({
      username: "testuser",
      email: "testusertest.com",
      password: "testuser"
    });

    expect(res.status).toBe(expectedStatus);
  });

  test("TCU04 - 2nd Create User with invalid email should return status 400", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 400;

    const res = await request(url).post(uri).send({
      username: "testuser",
      email: "testuser@test",
      password: "testuser"
    });

    expect(res.status).toBe(expectedStatus);
  });

  test("TCU05 - Create User with invalid username length - less than 2 characters should return status 400", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 400;

    const res = await request(url).post(uri).send({
      username: "t",
      email: "testusertest@testuser.com",
      password: "testuser"
    });

    expect(res.status).toBe(expectedStatus);
  });

  test("TCU06 - Create User with invalid password length - more than 20 characters should return status 400", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 400;

    const res = await request(url).post(uri).send({
      username: "testuser",
      email: "testusertest@testuser.com",
      password: "testusertestusertestusertestusertestuser",
    });

    expect(res.status).toBe(expectedStatus);
  });

  test("TCU07 - Checking authorization after login and after logout", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuserzz",
      password: "testuserzz"
    });
    const accessToken = loginResponse.body.accessToken;

    const uri = "/api/v1/users/me";
    const expectedStatusAfterLogin = 200;
    const expectedStatusAfterLogout = 403;

    const res = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`);
    expect(res.status).toEqual(expectedStatusAfterLogin);

    await request(url).post("/api/v1/users/logout").set("Authorization", `Bearer ${accessToken}`);

    const res2 = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`);
    expect(res2.status).toEqual(expectedStatusAfterLogout);
  });

  test("TCU08 - Checking authorization after login and after logout - token does not exist", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuserzz",
      password: "testuserzz"
    });
    const accessToken = loginResponse.body.accessToken;

    const uri = "/api/v1/users/me";
    const expectedStatusAfterLogin = 200;

    const res = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`);
    expect(res.status).toEqual(expectedStatusAfterLogin);

    await request(url).post("/api/v1/users/logout").set("Authorization", `Bearer ${accessToken}`).send();
    const expectedStatusAfterLogout = 403;

    const res2 = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`);
    expect(res2.status).toEqual(expectedStatusAfterLogout);
  });

  test("TCU09 - Get User by Username should return status 200", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;

    const uri = "/api/v1/users/testuseralpha";
    const expected = 200;

    const res = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`).send({ username: "testuseralpha" });
    expect(res.status).toEqual(expected);
  });

  test("TCU10 - Get User by Username should return status 403 token expired", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;

    const uri = "/api/v1/users/testuseralpha";
    const expected = 403;

    const res = await request(url).get(uri).send({ username: "testuseralpha" });
    expect(res.status).toEqual(expected);
  });

  test("TCU11 - Get User by Username should return status 500 body missing", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;

    const uri = "/api/v1/users/testuseralpha";
    const expected = 500;

    const res = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`).send({});
    expect(res.status).toEqual(expected);
  });

  test("TCU12 - Get current user should return status 200", async () => {
    const uri = "/api/v1/users/me";
    const expected = 200;

    const res = await request(url).get(uri).set("Authorization", `Bearer ${accessToken}`);
    expect(res.status).toEqual(expected);
  });

  test("TCU13 - Get current user should return status 403 token expired", async () => {
    const uri = "/api/v1/users/me";
    const expected = 403;

    const res = await request(url).get(uri);
    expect(res.status).toEqual(expected);
  });

  test("TCU14 - Testing refresh token should return status 200", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    const accessToken = loginResponse.body.accessToken;
    const refreshToken = loginResponse.body.refreshToken;

    const uri = "/api/v1/users/tokenrefresh";
    const expected = 200;

    const res = await request(url).post(uri).set("Authorization", `Bearer ${accessToken}`).send({ refreshToken });

    expect(res.status).toEqual(expected);
    expect(res.body.accessToken).toBeDefined();
  });

  test("TCU15 - Create user with existing username should return 409", async () => {
    const uri = "/api/v1/users";
    const expectedStatus = 409;
    const expectedMessage = "The username testuseralpha was already taken";

    const res = await request(url).post(uri).send({
      username: "testuseralpha",
      email: "testusertest@testuserDiferente.com",
      password: "testuser"
    });

    expect(res.status).toEqual(expectedStatus);
    expect(res.body).toHaveProperty("message", expectedMessage);
  });

  test("TCU16 - Create user with existing email should return 409", async () => {
    // Arrange
    const uri = "/api/v1/users";
    const expectedStatus = 409;
    const expectedMessage = "The email testuseralpha@test.com associated for this account already exists";

    // Act
    const res = await request(url)
      .post(uri)
      .send({
        username: "testuserbeta",
        email: "testuseralpha@test.com",
        password: "testuser"
      });

    // Assert
    expect(res.status).toEqual(expectedStatus);
    expect(res.body.message).toEqual(expectedMessage);
  });
  test("TCU17 - Create User with less than 6 characters password", async () => {
    // Arrange
    const uri = "/api/v1/users";
    const expectedStatus = 400;

    // Act
    const res = await request(url)
      .post(uri)
      .send({
        username: "testuser3",
        email: "testuser3@test.com",
        password: "tes" // Password with less than 6 characters
      });

    // Assert
    expect(res.status).toBe(expectedStatus);
  });

  test("TCU18 - Login should return status 400", async () => {
    // Arrange
    const uri = "/api/v1/users/login";
    const expectedStatus = 400;

    // Act
    const res = await request(url)
      .post(uri)
      .send({
        username: "testuserbeta",
        password: "XPTO"
      });

    // Assert
    expect(res.status).toBe(expectedStatus);
   ;
  });
  test("TCU19 - Login should return status 200", async () => {
    // Arrange
    const uri = "/api/v1/users/login";
    const expectedStatus = 200;
   // Act
    const res = await request(url)
      .post(uri)
      .send({
        username: "testuserbeta",
        password: "testuser"
      });
    // Assert
    expect(res.status).toBe(expectedStatus);
    expect(res.body).toHaveProperty('accessToken');
  });
  test("TCU20 - Testing refresh token should return status 401", async () => {
    // Arrange - Log in to get an access token and a refresh token
    const loginResponse = await request(url).post("/api/v1/users/login").send({
        username: "testuseralpha",
        password: "testuseralpha",
    });
    const refreshToken = loginResponse.body.refreshToken;
    // Act
    const uri = "/api/v1/users/tokenrefresh";
    const res = await request(url)
        .post(uri)
        .set("Authorization", "Bearer null") // We can use a null access token (alternatively, simply record a expired token and use it)
        .send({ refreshToken });
    // Assert
    expect(res.status).toEqual(401);
});

});  

