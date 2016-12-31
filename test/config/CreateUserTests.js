const chai = require('chai');
const chaiHttp = require('chai-http');
process.env.NODE_ENV = 'dev';
const expect = chai.expect;
const server = require('../../index');
chai.use(chaiHttp);

const user1 = require('../../model/user/user-schema');
const authUtils = require('../../auth/authUtils');
describe('functional test Create User', function () {
  before(function(done){
    user1.collection.drop();
    user1.ensureIndexes(function(){
      done();
    });
  });

    it('should create a new user', function (done) {
      const User = new user1();
      User.name = 'foo';
      User.email = 'foo@bar.com';
      User.save(function(err) {
        const id = User._id;
        //console.log(User._id);
        expect(id).to.not.be.null;
        done();
      });
    });

    it("should test jwt create", function(done) {
        const User = new user1();
        User.name = "foo";
          User.email = "foo@bur.com";
          User.save(function(err) {
          const token = authUtils.createJWT(User);
            expect(token).to.not.be.null;
            done();
          });
    });
});
