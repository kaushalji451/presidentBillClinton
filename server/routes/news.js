const express = require('express');
const Newsrouter = express.Router();
const News = require('../models/News');


Newsrouter.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (error) {
    console.log("some error");
  }
});

// POST route to add a single news item
Newsrouter.post('/', async (req, res) => {
  try {
    const newsData = req.body;

    // Create and save new news item
    const newNews = new News(newsData);
    await newNews.save();

    console.log(" News saved:", newNews);
    res.status(201).json({ message: 'News added successfully', data: newNews });

  } catch (error) {
    console.error(" Error saving news:", error);
    res.status(500).json({ message: 'Error saving news', error });
  }
});

module.exports = Newsrouter;









