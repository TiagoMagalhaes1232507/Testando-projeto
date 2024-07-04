import request from "supertest";

//let accessToken: string; // variable to store the access token
let url: string = "http://localhost:5001"; // defines url to requests

describe("Testing requests to members", () => {

    beforeAll(async (): Promise<void> => {
        // To Create an user
        try {
            const createUserResponse = await request(url)
                .post("/api/v1/users/")
                .send({
                    username: "testmembers",
                    email: "members@test.com",
                    password: "membersss",
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
                username: "testmembers",
                password: "membersss",
            });
    });


    // For these tests authotization isn't mandatory
    test("CTm1 - If member is registred (status)", async () => {
        // Arrange
        const username = "testmembers";
        const expectedStatusCode = 200;
        const expectedBody = {"member": {"reputation": 0, "user": {"username": "testmembers"}}};

        //Send request - Act
        const response = await request(url)
            .get("/api/v1/members/" + username)
            //.set("Content-Type", "application/json")
            .send({});

        //Request Response - Assert
        expect(response.statusCode).toBe(expectedStatusCode);
        expect(response.body).toStrictEqual;
    });

    test("CTm2 - If member is not registred", async () => {
        // Arrange
        const username = "notmember";
        const expectedStatusCode = 404;
        const expectedBody = "Couldn't find a member with the username";

        //Send request - Act
        const response = await request(url)
            .get("/api/v1/members/" + username)
            //.set("Content-Type", "application/json")
            .send({});

        //Request Response - Assert
        expect(response.statusCode).toBe(expectedStatusCode);
        expect(response.body.message).toStrictEqual;
    });

    test("CTm3 - Response of ../members/me", async () => {
        // Arrange
        const expectedStatus = 400;
        const expectedBody = "Bad Request";

        //Send request - Act
        const response = await request(url)
            .get("/api/v1/members/me")
                //.set("Content-Type", "application/json")
                .send({});

        //Request Response - Assert
        expect(response.status).toBe(expectedStatus);
        expect(response.body.message).toStrictEqual;
    });

});