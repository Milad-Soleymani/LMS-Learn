require("dotenv").config();

// ! Add Packages
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// ! Receive Port & Mongodb URI form enviroment  
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


// ! Set security configs
cors({
    origin: process.env.CLIENT_URI,
    method: ["GET", "POST", "DELETE", 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
});


// ! Connect to database(mongodb)  
mongoose.connect(MONGO_URI)
    .then(
        () => { console.log('mongodb is connected') }
    )
    .catch(
        (e) => { console.log(e) }
    )

app.use(express.json())