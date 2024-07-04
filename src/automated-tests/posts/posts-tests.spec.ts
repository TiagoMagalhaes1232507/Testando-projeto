import { link } from "fs";
import request from "supertest";

let accessToken: string; // Declares a variable to store the access token
const url: string = "http://localhost:5001"; // Defines the base URL for the requests

describe("Posts Endpoint", () => {
  beforeAll(async (): Promise<void> => {
    // This function runs before all tests in the describe block
    // Create a user
    try {
      const createUserResponse = await request(url).post("/api/v1/users").send({
        username: "string6",
        email: "string6@gmail.com",
        password: "string6",
      });

      const createUser = createUserResponse.body;
      console.log("Create User Response Body:", createUser);
    } catch (error) {
      console.log("Create User Error:", error);
    }

    // Log in the user
    try {
      const loginResponse = await request(url).post("/api/v1/users/login").send({
        username: "string6",
        password: "string6",
      });

      accessToken = loginResponse.body.accessToken; // Stores the access token obtained in the login response
      console.log("Login Response Body:", loginResponse.body);
    } catch (error) {
      console.log("Login Error:", error);
    }
  });
 
    test("CTP01 -create post text should return status 200", async () => {
        const uri = "/api/v1/posts/";
        const expected = 200;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken) 
          .send({
            title: "Create a post",
            text: "how to create a post in postman",
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP02-create post text with optional userId should return status 200", async () => {
        const uri = "/api/v1/posts/";
        const expected = 200;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken) 
          .send({
            userId: "string6",
            title: "Create a post",
            text: "how to create a post in postman",
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP03 -create post link should return status 200", async () => {
        const uri = "/api/v1/posts/";
        const expected = 200;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken) 
          .send({
            title: "Create a post",
            link: "https://www.youtube.com",
            postType: "link",
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP04 -create post link with optional userId should return status 200", async () => {
        const uri = "/api/v1/posts/";
        const expected = 200;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken) 
          .send({
            userId: "string6",
            title: "Create a post",
            link: "https://www.youtube.com",
            postType: "link",
          });
        expect(res.status).toEqual(expected);
      });
  

      test("CTP05 -Create text post with invalid title length (less than 2 characters) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "a", 
            text: "how to create a post in postman",
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });
    
      test("CTP06-Create text post with invalid title length (more than 85 characters) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "a".repeat(86),
            text: "how to create a post in postman",
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP07 -Create link post with invalid title length (less than 2 characters) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "a", 
            link: "https://www.youtube.com",
            postType: "link",
          });
        expect(res.status).toEqual(expected);
      });
    
      test(" CTP08-Create link post with invalid title length (more than 85 characters) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "a".repeat(86),
            link: "https://www.youtube.com",
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP09 -Create post with invalid text length (less than 20 characters) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "Create a post",
            text: "aa",
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP10- Create post with invalid link length (less than 8 characters) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "Create a post",
            link: "aaaaaaa",
            postType: "link"
          });
        expect(res.status).toEqual(expected);
      });
    
      test("CTP11- Create post with invalid link length(more than 500) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "Create a post",
            link: "a".repeat(500),
            postType: "link"
          });
        expect(res.status).toEqual(expected);
      });

      test("CTP12 -Create post with invalid text length (more than 10000) should return status 400", async () => {
        const uri = "/api/v1/posts/";
        const expected = 400;
        const res = await request(url)
          .post(uri)
          .set("Content-Type", "application/json")
          .set("Authorization", accessToken)
          .send({
            title: "Create a post",
            text: "a".repeat(10001),
            postType: "text",
          });
        expect(res.status).toEqual(expected);
      });
    
        test("CTP13- Missing posttype on post postshould return status 400", async () => {
          const uri = "/api/v1/posts/";
          const expected = 400;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
              title: "Create a post",
              text: "abcd asdjafoa ashhsaocasc",
              link: "https://www.youtube.com",
              }
          );
          expect(res.status).toEqual(expected);
        });


        test("CTP14- Missing title should return status 400", async () => {
          const uri = "/api/v1/posts/";
          const expected = 400;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
              text: "abcd asdjafoa ashhsaocasc",
              postype: "text",
              }
          );
          expect(res.status).toEqual(expected);
        });

        test("CTP15- Missing title on link post should return status 400", async () => {
          const uri = "/api/v1/posts/";
          const expected = 400;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
                link: "https://www.youtube.com",
              postype: "link",
              }
          );
          expect(res.status).toEqual(expected);
        });


        test("CTP16 -Missing text should return status 400", async () => {
          const uri = "/api/v1/posts/";
          const expected = 400;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
              title: "create post",
              postype: "text",
              }
          );
          expect(res.status).toEqual(expected);
        });

        test("CTP17 -Missing link should return status 400", async () => {
          const uri = "/api/v1/posts/";
          const expected = 400;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
              title: "create post",
              postype: "link",
              }
          );
          expect(res.status).toEqual(expected);
        });

        test("CTP18 -Missing body should return status 400", async () => {
          const uri = "/api/v1/posts/";
          const expected = 400;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
           
          }
        );
          expect(res.status).toEqual(expected);
        });


     
        test("CTP19 -All fields including all optional to post link return status 200", async () => {
          const uri = "/api/v1/posts/";
          const expected = 200;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
            userId: "string6",
            title: "Create a post",
            text: "abcde",
            link: "https://www.youtube.com",
            postType: "link",
          }
        );
          expect(res.status).toEqual(expected);
        });

        test("CTP20 -All fields including all optional for post text return status 200", async () => {
          const uri = "/api/v1/posts/";
          const expected = 200;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .set("Authorization", accessToken)
            .send(
              {
                userId: "string6",
                title: "Create a post",
                text: "abcde",
                link: "https://www.youtube.com",
                postType: "text",
              }
            );
              expect(res.status).toEqual(expected);
            });

        test("CTP21 - Should return 403 if doesnt have accesstoken", async () => {
          const uri = "/api/v1/posts/";
          const expected = 403;
          const res = await request(url)
            .post(uri)
            .set("Content-Type", "application/json")
            .send({
              title: "Create a post",
              text: "how to create a post in postman",
              postType: "text",
            });
          expect(res.status).toEqual(expected);
        });



        test("CTP22 -Get recent post should return status 200 ", async () => {
          const uri = "/api/v1/posts/recent";
          const expected = 200;
          const res = await request(url).get(uri);
          expect(res.status).toEqual(expected);
        });
      
        test("CTP23 -Get recent post with optional userId should return status 200 ", async () => {
          const uri = "/api/v1/posts/recent";
          const expected = 200;
          const res = await request(url).get(uri).set("Content-Type", "application/json")
                  .set("Authorization", accessToken).send(
              {
                  userId: "string6"
                   }
                );
          expect(res.status).toEqual(expected);
        });
      
        test("CTP24 -Get recent post without token with body should return status 200 ", async () => {
          const uri = "/api/v1/posts/recent";
          const expected = 200;
          const res = await request(url).get(uri).set("Content-Type", "application/json")
                  .send(
              {
                  userId: "string6"
                   }
                );
          expect(res.status).toEqual(expected);
        });

        test("CTP25 -Get popular post should return status 200 ", async () => {
          const uri = "/api/v1/posts/popular";
          const expected = 200;
          const res = await request(url).get(uri);
          expect(res.status).toEqual(expected);
        });
      
        test("CTP26 -Get popular post with optional userId should return status 200 ", async () => {
          const uri = "/api/v1/posts/popular";
          const expected = 200;
          const res = await request(url).get(uri).set("Content-Type", "application/json")
                  .set("Authorization", accessToken).send(
              {
                  userId: "string6"
                   }
                );
          expect(res.status).toEqual(expected);
        });

        test("CTP27 -Get recent post with optional offset should return status 400 ", async () => {
          const uri = "/api/v1/posts/recent?offset=1";
          const expected = 400;
          const res = await request(url).get(uri).set("Content-Type", "application/json")
                  .set("Authorization", accessToken).send(
              {
                   }
                );
          expect(res.status).toEqual(expected);
        });

        test("CTP28 Get popular post with optional offset should return status 400 ", async () => {
          const uri = "/api/v1/posts/popular?offset=1";
          const expected = 400;
          const res = await request(url).get(uri).set("Content-Type", "application/json")
                  .set("Authorization", accessToken).send(
              {
                   }
                );
          expect(res.status).toEqual(expected);
        });

      });
    

      
    
