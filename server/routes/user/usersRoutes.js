const express = require("express");
const router = express.Router();

// Example route to get users
router.get("/users", async (req, res) => {
  const pool = req.app.locals.pool;

  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});

module.exports = router;
