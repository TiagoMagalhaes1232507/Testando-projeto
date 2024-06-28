// // (RR) este ficheiro é para desenvolver os testes
// // e depois para exportar para o ficheiro comments-tests.ts (recomendado pelo prof. Baltarejo)

import request from "supertest";

let accessToken: string; //Declares a variable to store the access token
const url: string = "http://localhost:5001"; //Define a URL base para as requisições
describe("Posts Endpoint", () => {
  beforeAll(async (): Promise<void> => {
    const loginResponse = await request(url).post("/api/v1/users/login").send({
      //Make a POST request to the login endpoint and send the credentials
      username: "string6",
      password: "string6",
    });
    console.log("Login Response Body:", loginResponse.body);
    accessToken = loginResponse.body.accessToken; //Stores the access token obtained in the login response
});

test("Get recent post should return status 200 ", async () => {
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = "/api/v1/posts/recent/";
    const expected = 200;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
  });

  test("Get popular post should return status 200 ", async () => {
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = "/api/v1/posts/popular/";
    const expected = 200;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).get(uri);
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
  });

  test("Post create post should return status 200 ", async () => {
    //arrange: sets the URI for the comment endpoint with a valid ID and expected status
    const uri = "/api/v1/posts/";
    const expected = 200;
    //act: makes a GET request to the defined endpoint
    const res = await request(url).post(uri).set("Content-Type", "application/json")
            .set("Authorization", accessToken).send(
        {
            title: "Create a post",
            text: "how to create a post in postman", 
            postType: "text" }
            
    );
    //assert: checks if the response status is the same as expected
    expect(res.status).toEqual(expected);
});
    test("create post should return status 200", async () => {
        const uri = "/api/v1/posts/";
        const expected = 200;
    
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken) // Usando o accessToken no cabeçalho Authorization
          .send({
            title: "Create a post",
            text: "how to create a post in postman",
            postType: "text",
          });
    
        expect(res.status).toEqual(expected);
      });
  


  });

