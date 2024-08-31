const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/exampleController");

// Route to get all data from the table
router.get("/get-data", exampleController.getAllData);

// Route to get the password
router.get("/get-password", exampleController.getPassword);

module.exports = router;
