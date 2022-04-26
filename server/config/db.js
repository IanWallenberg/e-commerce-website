// require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connection SUCCESS:${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection FAIL");

    process.exit(1);
  }
};

module.exports = connectDB;
