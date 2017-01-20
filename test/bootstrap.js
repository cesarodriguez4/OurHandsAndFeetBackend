global.chai = require('chai');
global.chaiHttp = require('chai-http');
global.sinon = require('sinon');
process.env.NODE_ENV = 'dev';
process.env.MONGO_DB_URI = 'localhost';
global.expect = chai.expect;
chai.use(chaiHttp);

const mongoose = require('mongoose');
const mockgoose = require('mockgoose');

mockgoose(mongoose).then(() => {
    global.server = require('../index');
    done();
});
