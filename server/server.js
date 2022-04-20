require('dotenv').config();

const express = require("express"); // Initiating express 

const connectDB = require("./config/db"); // fetching from config for connecting database



const app = express();

connectDB();

app.use(express.json());

//Creating the PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 


