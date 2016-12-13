'use strict';
const google = require('../../auth/google');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

describe('The Google Module', function () {

  const server = sinon.fakeServer.create();
  it("should authenticate", function () {

    google.authenticate();

    function hello(name, cb) {
        cb("hello " + name);
      }
          var cb = sinon.spy();

          hello("foo", cb);

          expect(cb).to.have.been.calledWith("hello boo");
      });
  });
