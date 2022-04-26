require("dotenv").config();
const express = require("express"); // Initiating express
const connectDB = require("./config/db"); // fetching from config for connecting database
// const inEarHeadphones = require("./models/InEarHeadphones.js");
const Headphones = require("./models/Headphones.js");
const cors = require("cors");
const app = express();
require('./seederDatabase')




connectDB();

app.use(express.urlencoded({ extended: true }));
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

app.get("/products/inEar", (req, res) => {
  Headphones.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


//creating products Onear get all products


// app.get("/products"), async (req, res) => {
//   try {
//     const inEarproducts = await inEarHeadphones.find();
//     res.json({ ok: true, message: "products", data: inEarproducts });
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       message: error.message,
//       data: "",
//     });
//   }
// }
  

// app.get("/products/OnEar"), async (req, res) => {
//   try {
//     const products = await Headphones.find();
//     console.log(products)
//     res.json({ ok: true, message: "products", data: products });
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       message: error.message,
//       data: "",
//     });
//   }
// }


// "localhost:5000/products/InEar"




//Creating the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


