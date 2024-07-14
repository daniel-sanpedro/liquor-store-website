const cors = require("cors");

const corsOptions = {
  origin: "http://your-frontend-domain.com",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
