// routes/contact.js  (or wherever your router is)
const express = require('express');
const Contactrouter = express.Router();
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/mailer');

// ensure dotenv loaded at app entry
// require('dotenv').config();

Contactrouter.post('/', async (req, res) => {
  console.log("this is data", req.body);
  try {
    // Optional: validate req.body here (you can add express-validator)
    const data = new Contact(req.body);
    await data.save();
    console.log("Saved contact:", data);

    // Send email (fire and await so we know if it worked)
    try {
      const info = await sendContactEmail({ contactData: data.toObject() });
      console.log('Email sent: ', info.messageId || info);
      return res.status(200).json({ message: "data saved successfully and email sent" });
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr);
      // You might still consider this a success for DB, but inform client:
      return res.status(200).json({
        message: "data saved successfully but failed to send email",
        emailError: String(emailErr.message || emailErr)
      });
    }

  } catch (error) {
    console.log("this is error", error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = Contactrouter;
