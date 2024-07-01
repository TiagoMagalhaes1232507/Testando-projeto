import request from "supertest";
//import {app} from "./shared/infra/http/"
// import DTO ?????!



//let accessToken: string; // variable to store the access token
let uri: string = "http://localhost:5001"; // defines uri to requests

describe("Testing requests to members", () => {

    beforeAll(async (): Promise<void> => {
        // To Create an user
        try {
            let createUserResponse = await request(uri)
                .post("api/v1/users")
                .send({
                    username: "zzz",
                    email: "zzz@zzz.com",
                    password: "zzzzzz",
                });
            let createUser = createUserResponse.body;
            console.log("Created User:", createUser);
        } catch (error) {
            console.log("Create User Error:", error);
        }

        // User Loggin
        let loginResponse = await request(uri)
            .post("/api/v1/users/login")
            .send({
                username: "zzz",
                password: "zzzzzz",
      });
    })



    test("If member is registred", async () => {
        // Arrange
        let username = "zzz";
        let expectedStatus = 200;

        //Send request - Act
        let response = await request(uri)
            .get("/api/v1/members/:{username}")
            .set("Content-Type", "application/json")
            .send({});

        //Request Response - Assert
        expect(response.status).toBe(expectedStatus)
    });


    test("If member is not registred", async () => {
        // Arrange
        let username = "yyy";
        let expectedStatus = 404;

        //Send request - Act
        let response = await request(uri)
            .get("/api/v1/members/:{username}")
            .set("Content-Type", "application/json")
            .send({});

        //Request Response - Assert
        expect(response.status).toBe(expectedStatus)
    });

})