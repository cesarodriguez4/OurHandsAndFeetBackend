global.chai = require('chai');
global.chaiHttp = require('chai-http');
process.env.NODE_ENV = 'dev';
process.env.MONGO_DB_URI = 'localhost';
global.expect = chai.expect;
chai.use(chaiHttp);

var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

before(function(done) {
    mockgoose(mongoose).then(function() {
        global.server = require('../index');
        done();
    });
});
