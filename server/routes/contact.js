const express = require('express');
const Contactrouter = express.Router();
const Contact = require('../models/Contact');

Contactrouter.post('/', async (req, res) => {
  console.log("this is data", req.body);
  try {
    let data = new Contact(req.body);
    console.log("this is data", data);
    await data.save();
    res.status(200).json({ message: "data saved successfully" })
  } catch (error) {
    console.log("this is error", error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = Contactrouter;
