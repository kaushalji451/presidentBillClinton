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

Newsrouter.post('/',async (req,res)=>{
  try {
    const data =  await News.insertMany(newsData);
    console.log("data.saves");
  } catch (error) {
    console.log("some error",error);
  }
})

module.exports = Newsrouter;









