import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/dataRoutes.js";
import apiRoutes from "./routes/apiRoutes.js";

dotenv.config(); // Load environment variables from .env file
dotenv.config({ path: './backend/.env' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Use the data routes
app.use("/api/data", dataRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
