const express = require('express');
const Contactrouter = express.Router();
const Contact = require('../models/Contact');


Contactrouter.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = Contactrouter;
