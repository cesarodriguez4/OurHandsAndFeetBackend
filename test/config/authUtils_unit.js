"use strict";
var authUtils = require("../../auth/authUtils.js");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("The authUtils Module", function () {
  it("should createJWT", function () {

    function hello(name, cb) {
        cb("hello " + name);
      }
          var cb = sinon.spy();

          hello("foo", cb);

          expect(cb).to.have.been.calledWith("hello boo");
      });
  });
