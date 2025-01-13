import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Funktion til at sende e-mail
const sendEmail = async (req, res) => {
  const { name, email, phone, description } = req.body;

  dotenv.config();


  const transporter = nodemailer.createTransport({
    host: 'smtp.simply.com', 
    port: 587, 
    secure: false, 
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: process.env.EMAIL, 
    to: 'your@email.here', // Replace with your email that recieves the messages
    subject: `[Your name] Your subject here ${name}`, //also replace the text here
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Description: ${description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
};

export default { sendEmail };
