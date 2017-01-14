"use strict";
const routes = require('../../routes');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
describe("The Routes Module", function () {

  it("should give a welcome message", function () {
    request(routes)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200);
  });

  it("should redirect if not authenticated", function () {
    request(routes)
      .get('/user/test')
      .expect(401);
  });
});



