const dotenv = require("dotenv");

dotenv.config();

const authConfig = {
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
  jwtExpiration: process.env.JWT_EXPIRATION || "1h",
};

module.exports = authConfig;
