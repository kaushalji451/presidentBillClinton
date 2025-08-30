const express = require('express');
const Contactrouter = express.Router();
const Contact = require('../models/Contact');
const multer = require('multer');

const upload = multer(); // memory storage

Contactrouter.post('/', upload.none(), async (req, res) => {
  // req.body now contains your form fields
  const { name, email, message, phone, subject, inquiryType } = req.body;

  console.log('Received contact form submission:', req.body);

  if (!name || !email || !message || !phone || !subject || !inquiryType) {
    return res.status(400).json({
      error: 'Name, email, message, phone, subject, and inquiryType are required'
    });
  }

  try {
    const contact = new Contact({ name, email, message, phone, subject, inquiryType });
    await contact.save();
    console.log('Contact saved successfully');
    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = Contactrouter;
