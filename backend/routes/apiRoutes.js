import express from "express"; // Ændret til import
const apiRouter = express.Router();
import nodemailerController from '../controllers/nodemailer.js';
import passwordController from '../controllers/getPassword.js';

// Route to send email
apiRouter.post('/send-email', nodemailerController.sendEmail);

// Route to get the password
apiRouter.get("/get-password", passwordController.getAdminPassword);

export default apiRouter; // Ændret til export default