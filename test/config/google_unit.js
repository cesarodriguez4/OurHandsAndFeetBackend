const google = require('../../auth/google');
const chai = require('chai');
const sinon = require('sinon');
const assert = require('assert');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

var server;

describe("The Google Module", function () {

  before(function () {
    server = sinon.fakeServer.create();
  });

  after(function () {
    server.restore();
  });

  it("should authenticate", function () {
//the spy needs a request body code variable
    var callback = sinon.spy();

    google.authenticate(callback);

    if(server.requests.length){
      server.requests[0].respond(
            200,
            { "Content-Type": "application/json" },
            JSON.stringify([{ done: true }])
        );
    }

      assert(callback.calledOnce);
  });

});
