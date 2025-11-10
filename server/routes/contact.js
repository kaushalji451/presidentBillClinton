// routes/contact.js
const express = require("express");
const Contactrouter = express.Router();
const Contact = require("../models/Contact");
const { appendContactToSheet } = require("../utils/googleSheets");

Contactrouter.post("/", async (req, res) => {
  console.log("Incoming Contact Data:", req.body);

  try {
    // Save data to MongoDB
    const data = new Contact(req.body);
    await data.save();
    console.log("Saved to MongoDB:", data._id);

    // Try appending to Google Sheets
    let sheetStatus = "not attempted";
    try {
      await appendContactToSheet(data.toObject());
      sheetStatus = "added to sheet";
      console.log("added to sheet");
    } catch (err) {
      console.error("Google Sheets append failed:", err);
      sheetStatus = "sheet append failed";
    }

    return res.status(200).json({
      message: "Data saved successfully",
      sheetStatus,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = Contactrouter;
