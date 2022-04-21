require("dotenv").config();


const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("MongoDB connection SUCCESS");

    } catch (error) {
        console.error("MongoDB connection FAIL");

        process.exit(1);
    }
}


//  const connectDB = mongoose.connect(DB,{

// }).then(()=>{
//     console.log('MongoDB Connection Successful');
// }).catch((err)=> console.log('Connection Failed'))

module.exports = connectDB;
