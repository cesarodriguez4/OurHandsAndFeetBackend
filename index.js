
const express    = require('express');
const mongoose   = require('mongoose');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const bluebird   = require('bluebird');
const dotenv     = require('dotenv');
const config = require('./config');
const routes = require('./routes');

//TODO: Figure out why process.env.NODE_ENV is undefined at start
dotenv.config();

if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === undefined){
  console.log("MONGO DB URI is: " + process.env.MONGO_DB_URI)
};

const app  = express();

app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:9000");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGO_DB_URI);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', routes);

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

module.exports = app;
