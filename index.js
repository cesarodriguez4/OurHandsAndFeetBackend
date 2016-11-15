
const express    = require('express');
const mongoose   = require('mongoose');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const bluebird   = require('bluebird');
const dotenv     = require('dotenv');
const config = require('./config');
const routes = require('./routes');
var cors = require('cors');

//TODO: Figure out why process.env.NODE_ENV is undefined at start
dotenv.config();

var corsOptions = {
  origin: process.env.AllowUrl,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === undefined){
  console.log("MONGO DB URI is: " + process.env.MONGO_DB_URI)
};

console.log("allowUrl " + process.env.AllowUrl);

const app  = express();
app.use(cors(corsOptions));

app.use(function(req, res, next){
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
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
