const User2 = require('../../model/user/user-schema');
// const UserRouter2 = require('../../model/user/user-router');
//const Server = require('../../index');
describe('functional test Create User', () => {
  beforeEach((done) => {
    User2.collection.drop();
    User2.ensureIndexes();
    done();
  });
// TODO:https://github.com/UltimatePromotions/ourhandsandfeet/issues/41
  it('should get the new user by id', (done) => {
    let User = new User2();
    User.name = 'foo2';
    User.email = 'foo2@bar.com';
    User.save((err) => {
      const Uid = User._id;
      chai.request(server)
      .get('/user/' + Uid)
      .end((err, res) => {
        expect(res).to.have.status(200);
          // expect(res.body).to.have.lengthOf(1);
        done();
      });
    });
  });

    it('should update the new user by id', (done) => {
      let User = new User2();
      User.name = 'foo2';
      User.email = 'foo2@bar.com';
      User.save((err) => {
        const Uid = User._id;
        chai.request(server)
        .put('/user/' + Uid)
        .send({ userType: 'coolGuy' })
        .end((err, res) => {
          expect(res).to.have.status(200);
            // expect(res.body).to.have.lengthOf(1);
          done();
        });
      });
    });
});
