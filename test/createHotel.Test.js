const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const assert = require("chai");

describe("verification of hotel creation", (done) => {
    it("the user did not enter a number in the form", (done) => {
        let user = {
        name: "Hotel Novotel Barcelona City",
        photo: [
            "https://www.ahstatic.com/photos/5560_ho_05_p_1024x768.jpg",
            "https://www.ahstatic.com/photos/5560_sm_00_p_1024x768.jpg",
            "https://www.ahstatic.com/photos/5560_sw_02_p_1024x768.jpg",
        ],
        capacity: 50000,
        citiId: "636fca0425d63341f230ebc2",
        userId: "636f1edc14f79b76f5e442bc",
        };
        expect(user.capacity).to.be.a("Number"); // to.be.a es una cadena
        done();
    });
});

it("verify the status 201", (done) => {
    request(app)
        .post("/api/hotels/")
        .send({
            name: "Beijing Double",
            photo: [
                "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/386982477.jpg?k=bd7264fadf0b4cccd8464167b425295b0727d479fbe457eab4d77e0b8488936c&o=&hp=1",
                "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/182086832.jpg?k=a1d1f77f720076d1d7a3204de34d017b22ba7ba6032f26a7588172129066e7cb&o=&hp=1",
            ],
            capacity: 1000,
            citiId: "636fca0425d63341f230ebc3",
            userId: "636f1edc14f79b76f5e442ba",
        })
        expect(201, done());
});
