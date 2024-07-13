const dotenv = require("dotenv");

dotenv.config();

const appConfig = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
};

module.exports = appConfig;
