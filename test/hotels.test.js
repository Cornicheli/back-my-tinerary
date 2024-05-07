const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

// discribe agrupa test cases
describe("GET /api/hotels/?name=&order=", () => {
    it("check status 404", (done) => {
        const checkStatus = "Error 404";
        request(app)
        .get(`/api/hotels/?name=${checkStatus}&order=`)
        .expect(404, done);
    });
});

