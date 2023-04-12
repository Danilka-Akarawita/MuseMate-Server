const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
  name: {
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
    type:Number,
    required:true
  },
  UID: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);
module.exports = mongoose.model("Musemate", eventSchema);