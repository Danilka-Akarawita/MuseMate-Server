const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({
    studioID:{
        type:String,
        required:true
    },
    feedbacks:
    {
      type:String,
      required:false
    } 
   
},
{ timestamps: true }
);
module.exports = mongoose.model("Feedbacks", feedbackSchema);