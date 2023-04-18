const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  Clientname: {
    type: String,
    required: true
  },
  date: {
    type: Date,  
    required: true
  },
  timeSlot: {
    type: String,
    required: true
  },
  mobile:{
    type:String,
    required:true
  },
  StudioName:{
    type:String,
    require:true
  }
 
},
{ timestamps: true }
);
module.exports = mongoose.model("Client", clientSchema);