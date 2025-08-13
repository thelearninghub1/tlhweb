const mongoose = require("mongoose");

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Client Name"]
    },
    title:{
        type:String,
        required:[true,"Please Enter Client Title"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Client Feedback"]
    },
  
    createdAt:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model("Feedback",feedbackSchema)