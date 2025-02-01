import request from "supertest";
import app from "../app.js"

describe("GET /", ()=>{
    it("Should return Hello World!", async()=>{
        const chai = await import("chai")

        const expect = chai.expect;

        await request(app)
            .get('/')
            .expect(200)
            .then((res)=>{
                expect(res.body.message).to.equal("Hello World!")
                // expect(res.text).to.equal("Hello World!")
            })
    })
})