// backend/routes/passwordRoutes.js
import { Router } from "express";
const router = Router();

// Endpoint to provide the password securely
router.get("/get-password", (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD; // Fetch the password from the backend .env file

  // Optionally, you could implement some basic security checks here
  // For example, ensure that the request is coming from a trusted source
  res.json({ password: adminPassword });
});

export default router;
