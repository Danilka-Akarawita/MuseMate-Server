const express = require("express");
const { insertValues,getAllClientDetails,updateBookingsByName,getClientDetailByDate,getClientDetailByName} = require("../controllers/ClientAccountController");
const router = express.Router();

router.get('/insertClient',insertValues);
router.get('/getClient',getAllClientDetails);
router.get('/getClientName/:Clientname',getClientDetailByName);


router.get('/Date/:date',getClientDetailByDate);
router.put("/ClientName/:name", updateBookingsByName);

module.exports = router;