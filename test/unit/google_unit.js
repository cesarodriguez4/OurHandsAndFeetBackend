const google = require('../../auth/google');

var server;

describe("The Unit Test for Google Module", function () {

  before(function () {
    server = sinon.fakeServer.create();
  });

  after(function () {
    server.restore();
  });

  it("should authenticate", function () {
//the spy needs a request body code variable

    var spy = sinon.spy(google.authenticate());


    //google.authenticate(callback);

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
