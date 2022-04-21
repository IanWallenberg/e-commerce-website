require("dotenv").config();
const express = require("express"); // Initiating express
const connectDB = require("./config/db"); // fetching from config for connecting database
const Headphones = require("./models/Headphones.js");
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

//DB config
app.get("/", (req, res) => res.status(200).send("HELOOOO"));

app.post("/products", (req, res) => {
  const dbHeadphones = req.body;

  Headphones.create(dbHeadphones, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products", (req, res) => {
  const dbHeadphones = req.body;

  Headphones.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//Creating the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
