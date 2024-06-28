// (RR) este ficheiro é para desenvolver os testes
// e depois para exportar para o ficheiro users-tests.ts (recomendado pelo prof. Baltarejo)
import request from "supertest";


// ## 2- Request: GET / Get current user

let accessToken: string;
const url: string = "http://localhost:5001";


describe("Users Endpoint", () => {
beforeAll(async (): Promise<void> => {
  const loginResponse = await request(url).post("/api/v1/users/login").send({
    username: "tiago",
    password: "12345678",
  });
  console.log("Login Response Body:", loginResponse.body);
  accessToken = loginResponse.body.accessToken;
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
});






