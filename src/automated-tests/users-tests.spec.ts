// (RR) este ficheiro é para desenvolver os testes
// e depois para exportar para o ficheiro users-tests.ts (recomendado pelo prof. Baltarejo)
import request from "supertest";

let accessToken: string;
let tokenRefresh: string;
const url: string = "http://localhost:5001";

describe("Users Endpoint", () => {
  test("Create User should return status 200", async () => {
    // arrange: define os detalhes do usuário a serem enviados na requisição
    const uri = "/api/v1/users";
    const expected = 200;
    //act
    try {
      const res = await request(url).post(uri).send({
        username: "testuser",
        email: "testuser@test.com",
        password: "testuser",
      });
    } catch (error) {
      console.log("Create User Error:", error);
    }
  });

  test("Create User with invalid email should return status 500", async () => {
    // arrange: define os detalhes do usuário a serem enviados na requisição
    const uri = "/api/v1/users";
    const expected = 500;
    //act
    const res = await request(url).post(uri).send({
      username: "testuser",
      email: "testusertest.com",
      password: "testuser",
    });
  });

  test("Create User with invalid username lentgh - less 3 character should return - status 500", async () => {
    // arrange: define os detalhes do usuário a serem enviados na requisição
    const uri = "/api/v1/users";
    const expected = 500;
    //act
    const res = await request(url).post(uri).send({
      username: "t",
      email: "testusertest@testuser.com",
      password: "testuser",
    });
  });

  test("Create User with invalid password lentgh - more 20 caharacter should return - status 500", async () => {
    // arrange: define os detalhes do usuário a serem enviados na requisição
    const uri = "/api/v1/users";
    const expected = 500;
    //act
    const res = await request(url).post(uri).send({
      username: "testuser",
      email: "testusertest@testuser.com",
      password: "testusertestusertestusertestusertestuser",
    });
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

    const logoutResponse = await request(url)
      .post("/api/v1/users/logout")
      .set("Authorization", accessToken);

    const res2 = await request(url).get(uri).set("Authorization", accessToken);
    //assert
    expect(res2.status).toEqual(403);
  });

  test("Checking authorization after login and after logout token no exist", async () => {
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

    const logoutResponse = await request(url)
      .post("/api/v1/users/logout")

    const res2 = await request(url).get(uri)
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
      .send({ username: "testuseralpha" });
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Get User by Username should status 403 token expired", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;
    //arrange
    const uri = "/api/v1/users/testuseralpha";
    const expected = 403;
    //act
    const res = await request(url)
      .get(uri)
      .send({ username: "testuseralpha" });
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Get User by Username should status 500 body missing", async () => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;
    //arrange
    const uri = "/api/v1/users/testuseralpha";
    const expected = 500;
    //act
    const res = await request(url)
      .get(uri)
      .set("Authorization", accessToken)
      .send({ });
    //assert
    expect(res.status).toEqual(expected);
  });


  test("Get current user should return status 200", async () => {
    //arrange
    const uri = "/api/v1/users/me";
    const expected = 200;
    //act
    const res = await request(url)
      .get(uri)
      .set("Authorization", accessToken);
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Get current user should return status 403 token expired", async () => {
    //arrange
    const uri = "/api/v1/users/me";
    const expected = 403;
    //act
    const res = await request(url)
      .get(uri)
    //assert
    expect(res.status).toEqual(expected);
  });

  test("Testing refresh token should status 200", async () => {
    const loginResponse = await request(url).post("/api/v1/users/").send({
      username: "testuseralpha",
      password: "testuseralpha",
    });
    accessToken = loginResponse.body.accessToken;
    //arrange
    const uri = "/api/v1/users/tokenrefresh";
    const expected = 200;
    //act
    const res = await request(url)
      .get(uri)
      .set("Authorization", accessToken)
      .send({  });
    //assert
    expect(res.status).toEqual(expected);
  });

});


describe("User Endpoint", () => {
  beforeAll(async () => {
    // Este bloco será executado antes de todos os testes na função describe
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

  test("Create user with existing username should return 409", async () => {
    // Arrange: define a URI para a criação do usuário e os dados do usuário existente
    const uri = "/api/v1/users";
    const expected = 409;

    // Act: faz uma solicitação POST para criar um usuário com o mesmo username
    const res = await request(url).post(uri).send({
      username: "testuseralpha",
      email: "testusertest@testuser.com",
      password: "testuser",
    });

    // Assert: verifica se o status da resposta é 409 (Conflito)
    expect(res.status).toEqual(expected);
  });

  test("Create user with existing email should return 409", async () => {
    // Arrange: define a URI para a criação do usuário e os dados do usuário existente
    const uri = "/api/v1/users";
    const expected = 409;

    // Act: faz uma solicitação POST para criar um usuário com o mesmo email
    const res = await request(url).post(uri).send({
      username: "testuserbeta",
      email: "testuseralpha@test.com",
      password: "testuser",
    });

    // Assert: verifica se o status da resposta é 409 (Conflito)
    expect(res.status).toEqual(expected);
  });
});

/*

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
    }

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

    test('Get current user with valid token', async () => {
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
     }) 

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
      .send({ username: "testuser2" });
    //assert
    expect(res.status).toEqual(expected);

  });


  // 5- Request: POST / Refresh token (incompleto?)
  test("Refresh access token should status 200", async () => {
    const refreshAccessTokenResponse = await request(url).post("/api/v1/users/token/refresh")
  })






});
});
*/
