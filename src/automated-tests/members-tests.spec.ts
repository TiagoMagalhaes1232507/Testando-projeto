import request from "supertest";
//import {app} from "./shared/infra/http/"
// import DTO ?????!



//let accessToken: string; // variable to store the access token
let url: string = "http://localhost:5001"; // defines url to requests

describe("Testing requests to members", () => {

    beforeAll(async (): Promise<void> => {
        // To Create an user
        try {
            const createUserResponse = await request(url)
                .post("/api/v1/users/")
                .send({
                    username: "zzz",
                    email: "zzz@zzz.com",
                    password: "zzzzzz",
                })
            const createUser = createUserResponse.body;
            console.log("Created User:", createUser);
        } catch (error) {
            console.log("Create User Error:", error);
        }

        // User Loggin
        const loginResponse = await request(url)
            .post("/api/v1/users/login")
            .send({
                username: "zzz",
                password: "zzzzzz",
            });
    });



    test("T1 - If member is registred", async () => {
        // For these test authotization isn't mandatory
        // Arrange
        const username = "zzz";
        const expectedStatus = 200;

        //Send request - Act
        const response = await request(url)
            .get("/api/v1/members/" + username)
            //.set("Content-Type", "application/json")
            .send({});

        //Request Response - Assert
        expect(response.status).toBe(expectedStatus);
    });


    test("T2 - If member is not registred", async () => {
        // Arrange
        const username = "yyy";
        const expectedStatus = 404;

        //Send request - Act
        const response = await request(url)
            .get("/api/v1/members/" + username)
            //.set("Content-Type", "application/json")
            .send({});

        //Request Response - Assert
        expect(response.status).toBe(expectedStatus);
    });

});