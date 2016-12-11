//Testing the service to send the Google client secret
//Testing the service to process the received Google key
//This should be mocked as we will not actually be interacting with Google to test this service
//Need to get Sinon working here

"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
process.env.NODE_ENV = "dev";
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
var expect = chai.expect;
var server = require("../../index.js");
//TODO when implementing our own account creation, need to include encryption - use the crypto npm package
//var   encrypt = require('../../server/common/encryption');
chai.use(chaiHttp);

var user1 = require('../../model/user/user-schema.js');
var authUtils = require('../../auth/authUtils');
//var userService1 = require('../../routers.js');
describe("functional test for the Google Auth service", function () {
  // before(function(done){
  //   //user1.remove();
  //   user1.collection.drop();
  //   user1.ensureIndexes(function(){
  //
  //     done();
  //   });

    //done();
  //});


    // it("should post the client secret", function (done) {
    //   chai.request(server)
    //   .post('/auth')
    //   .send({"name":"foo","email":"foo@bar.com"})
    //
    //
    //   .end(function(err, res){
    //     //  console.log(res.body);
    //       expect(res).to.have.status(200);
    //
    //       done();
    //   //  chai.request(server).post("/api/user/delete").send("foo@bar.com").end(function(err, res){
    //   //      expect(res).to.have.status(200);
    //   //  });;
    //   //  done();
    //       });
    // });
    //
    // it("should process the google auth key", function (done) {
    //
    //   // chai.request(server)
    //   // .end(function(err, res){
    //   //   //  console.log(res.body);
    //   //     expect(res).to.have.status(200);
    //
    //       done();
    //
    //   // });
    // });


});
//chai.use(sinonChai);

// describe("Test to prevent duplicate user", function () {
//     before(function(done){
//       user1.collection.drop();
//
//       done();
//     });
//     it("should return 400 - duplicate user", function (done) {
//     var salt = encrypt.createSalt();
//     var password_hash = encrypt.hashPassword(salt, "foobar");
//       user1.create({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar", "password_hash":password_hash, "salt":salt}, function(error, user){
//         console.log(error);
//         console.log(user);
//         chai.request(server)
//         .post('/api/user')
//         .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
//         .end(function(err, res){
//         //  console.log(res.body);
//           expect(res).to.have.status(400);
//           done();
//         })
//       });
//       // chai.request(server)
//       // .post('/api/user')
//       // .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"});
//
// //returning the user
//     });
//     after(function(done){
//         user1.collection.drop();
//          done();
//     });
// });
