const express=require('express')
const ContactRouter= express.Router()
const nodemailer = require("nodemailer")
const User=require('../models/User')



// Nodemailer transport config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ashwinmahakal123@gmail.com",      // ⚠️ Replace with your Gmail
      pass: "sjfd mdjr wlpl zdck",         // ⚠️ Use App Password, not regular password
    },
  });
  
  // Route to send mail
  ContactRouter.post("/", (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: email,
      to: "ashwinmahakal123@gmail.com",       // ⚠️ Where you want to receive the email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).send({ success: false, message: "Failed to send email" });
      }
      res.send({ success: true, message: "Email sent successfully" });
    });
  });

  module.exports=ContactRouter