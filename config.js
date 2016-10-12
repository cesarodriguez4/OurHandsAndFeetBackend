const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 7000
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://tipsyriders:doesitmatter@ds055626.mlab.com:55626/tipsyrydedata'
  }
};

module.exports = config;
