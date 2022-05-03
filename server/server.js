require("dotenv").config();
const express = require("express"); // Initiating express
const connectDB = require("./config/db"); // fetching from config for connecting database
const OnEarHeadphones = require("./models/OnEarModel.js");
const InEarHeadphones = require("./models/InEarModel.js");
const Cart = require("./models/Cart.js");

const cors = require("cors");
const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//DB config

app.get("/", (req, res) => res.status(200).send("HELOOOO"));

// OnEar Controller
app.post("/products/onear", (req, res) => {
  const dbOnEar = req.body;
  OnEarHeadphones.create(dbOnEar, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/onear", (req, res) => {
  OnEarHeadphones.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// InEar Controller
app.post("/products/inear", (req, res) => {
  const dbInEar = req.body;
  InEarHeadphones.create(dbInEar, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/inear", (req, res) => {
  InEarHeadphones.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//cart controllers
app.post("/cart", (req, res) => {
  const dbCart = req.body;
  Cart.create(dbCart, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cart", (req, res) => {
  Cart.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Creating the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
