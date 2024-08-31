const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const dataRoutes = require("./routes/dataRoutes"); // Import the data routes

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Use the data routes
app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
