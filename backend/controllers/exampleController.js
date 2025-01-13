import db from "../config/db.js"; 

const getAllData = (req, res) => {
  const query = "SELECT * FROM your-table-here"; // Replace with your actual table name
  db.query(query)
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

export default {getAllData};
