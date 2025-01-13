import express from "express";
import exampleController from "../controllers/exampleController.js";

const router = express.Router();

// Route to get all data from the table
router.get("/get-data", exampleController.getAllData);

export default router;