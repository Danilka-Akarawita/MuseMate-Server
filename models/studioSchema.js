const mongoose = require('mongoose');


const studioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pricePerhour: {
    type: String,  
    required: true
  },
  keyboardQuantity: {
    type: Number,
    required: true
  },
  guitarQuantity:{
    type:Number,
    required:true
  },
  percussionQuantity: {
    type: Number,
    required: true,
  },
  drumKitQuantity: {
    type: Number,
    required: true,
  },
  microphoneQuantity: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  
},
{ timestamps: true }
);
module.exports = mongoose.model("Studio", studioSchema);