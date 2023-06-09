const studioSchema = require('../models/studioSchema')
const feedbackSchema = require('../models/feedbackSchema')


const  insertValues=(req,res)=>{
    const studio = new studioSchema({
        name: "DanilkaStudio",
        pricePerhour: "500.00",
        keyboardQuantity: 2,
        guitarQuantity: 3,
        percussionQuantity: 2,
        drumKitQuantity: 1,
        microphoneQuantity: 3,
        area: "10x14"
      })
      const studio2 = new studioSchema({
        name: "VishathStudio",
        pricePerhour: "1000.00",
        keyboardQuantity: 2,
        guitarQuantity: 3,
        percussionQuantity: 5,
        drumKitQuantity: 1,
        microphoneQuantity: 3,
        area: "14x18"
      })
      
    

      


    studio.save()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Error saving studio to database.")
    })

    studio2.save()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Error saving studio to database.")
    })

}

const AddFeedBacks =async(req,res)=>{
  const {id}=req.params
  console.log(id)
  const {feedbacks}=req.body
  console.log(feedbacks)
  
  try{
    
  const feedbackdetail=await feedbackSchema.create({studioID: id,feedbacks})
  res.status(200).json(feedbackdetail)
  
  }
  catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
}

    
const getAllStudioDetails = (req, res) => {
    studioSchema.find()
      .then((studios) => {
        res.status(200).json(studios)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send("Error retrieving studio details  from database.")
      })
  }
  const getAllFeedBacks = (req, res) => {
    feedbackSchema.find()
      .then((feedback) => {
        res.status(200).json(feedback)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send("Error retrieving feedbacks  from database.")
      })
  }

module.exports={
    insertValues,
    getAllStudioDetails,
    AddFeedBacks,
    getAllFeedBacks
}