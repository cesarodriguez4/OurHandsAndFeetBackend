
const User1 = require('../../model/user/user-schema');
// const authUtils = require('../../auth/authUtils');
describe('functional test Create User',  () => {
  before((done) => {
    User1.collection.drop();
    User1.ensureIndexes(() => {
      done();
    });
  });

    it('should create a new user', (done) => {
      const User = new User1();
      User.name = 'foo';
      User.email = 'foo@bar.com';
      User.save((err) => {
        const id = User._id;
        expect(id).to.not.be.null;
        done();
      });
    });
});
