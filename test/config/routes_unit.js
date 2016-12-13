"use strict";
const routes = require('../../routes');
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

describe("The Routes Module", function () {
  it("should redirect if not authenticated", function () {

    function hello(name, cb) {
        cb("hello " + name);
      }
          let cb = sinon.spy();

          hello("foo", cb);

          expect(cb).to.have.been.calledWith("hello boo");
      });
  });
