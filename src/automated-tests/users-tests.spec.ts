// (RR) este ficheiro é para desenvolver os testes
// e depois para exportar para o ficheiro users-tests.ts (recomendado pelo prof. Baltarejo)
import request from "supertest";



let accessToken: string;
const url: string = "http://localhost:5001";

describe("Users Endpoint", () => {

// 1- Request: POST / Create User

  test("Create User returns OK", async () => {
    // arrange
    const url = "/api/v1/users";
    const expected = 200;
    //act
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


// 2- Request: GET / Get current user

  /* interface User {
    username: string;
    isEmailVerified: boolean;
    isAdminUser: boolean;
    isDeleted: boolean;
    }*/
  
  interface User {
    username: string;
   }
  
   describe('GET /api/v1/users/me', () => {
   
    beforeAll(async () => {
      const loginResponse = await request(url).post("/api/v1/users/login").send({
        // Make a POST request to the login endpoint and send the credentials
        username: "testuseralpha",
        password: "testuseralpha",
      });
      accessToken = loginResponse.body.accessToken; // Stores the access token obtained in the login response
    
    Test('Get current user with valid token', async () => {
      // Arrange 
      const url = '/api/v1/users/me';
      const expectedStatus = 200;
  
      // Act 
      const res = await request(url)
        .get(url)
        .set('Authorization', `Bearer ${accessToken}`);
  
      // Assert (verify the expected outcome)
      expect(res.statusCode).toBe(expectedStatus);
      expect(res.body).toHaveProperty('user');
  
      // Type assertion for user data (optional):
      const user: User = res.body.user;
      expect(user).toHaveProperty('username'); 
    });
  });
  
 /* describe('GET /api/v1/users/me', () => {
    it('should return 403 Forbidden for request without access token', async () => {
      // Arrange
      const url = '/api/v1/users/me';
      const expectedStatus = 403;
  
      // Act
      const res = await request(url)
        .get(url);
  
      // Assert
      expect(response.statusCode).toBe(expectedStatus);
    }) */

//4- Request: POST / Logout

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
    const res = await request(url).get(url).set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);

    const logoutResponse = await request(url).post("/api/v1/users/logout").set("Authorization", accessToken);

    const res2 = await request(url).get(url).set("Authorization", accessToken);
    //assert
    expect(res2.status).toEqual(403);
  });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //7- Request: GET / Get user by name
  test("Get User by Username should status 200", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuser2",
      password: "testuser2",
    });
    accessToken = loginResponse.body.accessToken;
    //arrange
    const uri = "/api/v1/users/testuser2";
    const expected = 200;
    //act
    const res = await request(url)
    .get(uri)
    .set("Authorization", accessToken)
    .send({username: "testuser2"});
    //assert
    expect(res.status).toEqual(expected);

  });


  // 5- Request: POST / Refresh token (incompleto?)
  test("Refresh access token should status 200", async () => {
    const refreshAccessTokenResponse = await request(url).post("/api/v1/users/token/refresh")
  })
  





});
});