const mongoose = require("mongoose")

const dotenv = require('dotenv')

dotenv.config()

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
    console.log("connected successfully")
    }
    catch(err){
        console.log("not connected successfully")
    }
}

module.exports = {dbConnect}