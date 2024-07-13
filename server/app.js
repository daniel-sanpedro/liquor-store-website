const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { Pool } = require("pg");

// Load configurations
const envConfig = require("./config/envConfig");
const appConfig = require("./config/appConfig");
const dbConfig = require("./config/dbConfig");
const loggerConfig = require("./config/loggerConfig");

// Initialize environment variables
envConfig();

// Import aggregated routes
const routes = require("./routes");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(loggerConfig);

// PostgreSQL connection pool setup
const pool = new Pool(dbConfig);

pool.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

// Make the pool available globally
app.locals.pool = pool;

// Routes middleware
app.use("/api", routes);

// Server setup
app.listen(appConfig.port, () => {
  console.log(
    `Server is running on port ${appConfig.port} in ${appConfig.env} mode.`
  );
});

module.exports = pool;
