const clientAccountSchema = require('../models/clientAccountSchema')

const  insertValues=(req,res)=>{
    const client = new clientAccountSchema({
        Clientname:"abcd" ,
        date:new Date('2022-04-18T12:30:00.000Z'),
        timeSlot:"10-12",
        mobile:"0112098205",
        StudioName:"DanilkaStudio"

    })

    client.save()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Error saving studio to database.")
    })
}

const getAllClientDetails = (req, res) => {
    clientAccountSchema.find()
      .then((studios) => {
        res.status(200).json(studios)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send("Error retrieving studio details  from database.")
      })
  }

  const getClientDetailByDate = (req, res) => {
    clientAccountSchema.find({date:'2022-04-18T12:30:00.000Z'})
      .then((DetailsByDate) => {
        res.status(200).json(DetailsByDate)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send("Error retrieving  details  by date from database.")
      })
  }

module.exports={
    insertValues,
    getAllClientDetails,
    getClientDetailByDate
    
}