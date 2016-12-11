//Testing the CRUD for new user service

"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
process.env.NODE_ENV = "dev";
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
var server = require("../../index.js");
//TODO when implementing our own account creation, need to include encryption - use the crypto npm package
//var   encrypt = require('../../server/common/encryption');
chai.use(chaiHttp);

var user1 = require('../../model/user/user-schema.js');
var authUtils = require('../../auth/authUtils');
//var userService1 = require('../../routers.js');
describe("functional test Create User", function () {

  before(function(done){
    //user1.remove();
    user1.collection.drop();
    user1.ensureIndexes(function(){

      done();
    });

    //done();
  });

    it("should create a new user", function (done) {
      var user = new user1();
      user.name = "foo";
      user.email = "foo@bar.com";
      user.save(function(err) {
        var id = user._id;
        console.log(user._id);
        expect(id).to.not.be.null;
        done();
      });  });
      it("should test jwt create", function(){
          var user = new user1();
          user.name = "foo";
          user.email = "foo@bur.com";
          user.save(function(err) {
            //var id = user._id;
            //console.log(user._id);

            var token = authUtils.createJWT(user);
            expect(token).to.not.be.null;
            done();
        });});
      // chai.request(server)
      // .post('/user')
      // .send({"name":"foo","email":"foo@bar.com"})
      //
      // //TODO why is this user not being created in the database?!
      //
      // .end(function(err, res){
      //   //  console.log(res.body);
      //     expect(res).to.have.status(200);
      //
      //     //TODO expect that this user is actually in the database, perform a get request with the result being foo@bar.com email
      //
      //     done();
      // //  chai.request(server).post("/api/user/delete").send("foo@bar.com").end(function(err, res){
      // //      expect(res).to.have.status(200);
      // //  });;
      // //  done();


  //  });


//TODO The following is not being covered in the user-router.js
//router.route('/')
  //.get((...args) => controller.find(...args))
  //.post((...args) => controller.create(...args));


//     it("should find the user that was just created in the database", function (done) {
//
//       emailOfUser = User1.findOne({ email: "foo@bar.com" });
//         // .end(function(err, res){
//         //   //  console.log(res.body);
//         //     expect(res).to.have.status(200);
//         expect(emailOfUser).to.equal("foo@bar.com");
//
//             //TODO expect that this user is actually in the database, perform a get request with the result being foo@bar.com email
//
//             done();
//
//           // });
//         });
//
//     it("should not create a new user if the user already exists", function (done) {
//
// //TODO post again the same user and it should not create a duplicate user, resceive a response 400
//       //TODO expect that the database only contains a single user
//     });



    //});
  //   it("should return 400 - duplicate user", function (done) {
  //     chai.request(server)
  //     .post('/user')
  //     .send({"name":"foo","email":"foo@bar.com"})
  //     .end(function(err, res){
  //     //  console.log(res.body);
  //         expect(res).to.have.status(400);
  //       done();
  //     })
  //  });

//     after(function(done){
//       user1.collection.drop();
//     //  user1.remove();
//       done();
//     });
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

 // describe("userService delete unit test", function(){
 //   beforeEach(function(done){
 //     chai.request(server)
 //     .post('/api/user')
 //     .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Venue Manager","password":"foobar"})
 //     .end(function(err, res){
 //        done();
 //     })
 //
 //   });
 //   it("should return 200 - deleted account with email foo@bar.com", function(done){
 //       chai.request(server)
 //           .delete('/api/user')
 //           .send({"email":"foo@bar.com"})
 //           .end(function(err, res){
 //               expect(res).to.have.status(200);
 //               done();
 //           });
 //   });
 //
 //
 // });
