// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp); 
const { expect } = chai;
var assert = chai.assert;




describe("Server!", () => {
  it("Returns the default welcome message", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        assert.strictEqual(res.body.message, "Welcome!");
        done();
      });
  });
  it("Check if Login worked", done => {
    chai
      .request(server)
      .get("/registration")
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.not.be.eql(0);
        done();
      });
  });

  it("Check if Registration worked", done => {
    var id = 1;
    chai
      .request(server)
      .get("/registration/" + id)
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.have.property('id').eq(1);
        res.body.should.have.property('name');
        res.body.should.have.property('email');
        done();
      });
  });


  it("Add a name and email to database", done => { 
        chai
          .request(server)
          .post("/registration") 
          .send({name: 'caroline', email: 'caroline@gmail.com'})
          .end((err, res) => {
            expect(res).to.have.status(201);
            res.body.should.have.property('id').eq(4);
            res.body.should.have.property("name").eq('caroline');
            res.body.should.have.property("email").eq('caroline@gmail.com');
            done();
          });
      });
});


