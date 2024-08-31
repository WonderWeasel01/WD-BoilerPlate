const db = require("../config/db"); // Import the database connection

// Controller to get all data from the 'Tracktorpull' table
exports.getAllData = (req, res) => {
  const query = "SELECT * FROM your-table-here"; // Replace with your actual table name
  db.query(query)
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Controller to get the password
exports.getPassword = (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD; // Fetch the password from the environment variables

  if (adminPassword) {
    res.json({ password: adminPassword });
  } else {
    res
      .status(500)
      .json({ error: "Password not found in environment variables" });
  }
};
