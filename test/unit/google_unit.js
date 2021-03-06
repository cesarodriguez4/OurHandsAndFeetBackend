let sinon = require('sinon');
let rewire = require('rewire');
const google = rewire('../../auth/google');

const accessTokenUrl = google.__get__('accessTokenUrl')
const peopleApiUrl = google.__get__('peopleApiUrl')

describe('The Unit Test for Google Module', () => {
  let
    User,
    request,
    authUtils;

  let
    revert_User,
    revert_request,
    revert_authUtils;

  beforeEach(() => {
    User = sinon.stub();
    User.findOne = sinon.stub();
    revert_User = google.__set__('User', User);

    request = { get: sinon.stub(), post: sinon.stub() };
    revert_request = google.__set__('request', request);

    authUtils = { createJWT: sinon.stub() };
    revert_authUtils = google.__set__('authUtils', authUtils);
  });

  afterEach(() => {
    revert_User();
    revert_request();
    revert_authUtils();
  });

  it('should authenticate', (done) => {
    const reqPostArgs = [accessTokenUrl];
    const token = { access_token: 'access_token' };
    request.post.yields(null, {}, token);

    const reqGetArgs = [{ url: peopleApiUrl, json: true, headers: { Authorization: `Bearer ${token.access_token}` } }];
    const profile = { email: 'email' };
    request.get.yields(null, {}, profile);

    const existingUser = { _id: 'someid' };
    User.findOne.yields(null, existingUser);

    const lastToken = 'lastToken';
    authUtils.createJWT.returns(lastToken);


    var req = { body: {} };
    var res = {
      send: (msg) => {
        expect(msg).to.have.property('token');
        expect(msg.token).to.equal(lastToken);
        done();
      }
    };

    google.authenticate(req, res)
  });

  it('should create a new user and authenticate', (done) => {
    const reqPostArgs = [accessTokenUrl];
    const token = { access_token: 'access_token' };
    request.post.yields(null, {}, token);

    const reqGetArgs = [{ url: peopleApiUrl, json: true, headers: { Authorization: `Bearer ${token.access_token}` } }];
    const profile = { email: 'email' };
    request.get.yields(null, {}, profile);

    // const existingUser = { _id: 'someid' };
    User.findOne.yields(null, null);
    var newUser = { save: sinon.stub() };
    User.returns(newUser);
    newUser.save.yields(null);

    const lastToken = 'lastToken';
    authUtils.createJWT.returns(lastToken);


    var req = { body: {} };
    var res = {
      send: (msg) => {
        expect(msg).to.have.property('token');
        expect(msg.token).to.equal(lastToken);
        done();
      }
    };

    google.authenticate(req, res)
  });
});
