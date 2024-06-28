/*import request from "supertest";
import {app}  from "../shared/infra/http/app";
import { GetMemberByUserNameDTO } from "../GetMemberByUserNameDTO";


describe ('Testing Members', () => {
    test("GET member with 200 result", async ()=> {
        const res = await request(app).get("http://localhost:5001/");
        expect(res.status).toEqual(200);

    })

    test("GET member with 500 result", async ()=> {
        const res = await request(app).get("http://localhost:5001/");
        expect(res.status).toEqual(500);

    })


    describe("Get Current Member", () => {
 
        test("should return status 200", async () => {
            //arrange
            const uri = "/api/v1/members/zzz";
        
            const expected = 200;
            //act
            const res = await request(app).get(uri);
            //assert
            expect(res.status).toEqual(expected);
        });
     
    });

})

export {};



*/