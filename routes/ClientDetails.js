const express = require("express");
const { insertValues,getAllClientDetails,getClientDetailByDate} = require("../controllers/ClientAccountController");
const router = express.Router();

router.get('/insertClient',insertValues);
router.get('/getClient',getAllClientDetails);
router.get('/Date',getClientDetailByDate);

module.exports = router;