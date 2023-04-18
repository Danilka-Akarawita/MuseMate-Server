require("dotenv").config();
const express = require("express");
const studioDetailsRoutes = require("./routes/studioDetails");
const  ClientDetailsRoutes= require("./routes/ClientDetails")
const mongoose = require("mongoose");
const app = express();


mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected");
    app.listen(process.env.PORT, () => {
      console.log("app", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  app.use("/api/studioDetails",studioDetailsRoutes);
  app.use("/api/clientDetails",ClientDetailsRoutes);