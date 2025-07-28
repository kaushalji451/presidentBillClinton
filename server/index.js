const express = require('express');
const cors = require('cors');
const app = express();
const Newsrouter = require("./routes/news");
const Contactrouter = require("./routes/contact");
const mongoose = require('mongoose');
require('dotenv').config();


app.use(cors());
app.use(express.json());


const MongoDB_URl = process.env.MONGO_URI;

// Connect to MongoDB database
const main = async () => {
  await mongoose
    .connect(MongoDB_URl)
    .then(console.log("connect to db"));
};
main();

app.use("/api/news", Newsrouter);

// Contact form handler
app.use('/api/contact', Contactrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
