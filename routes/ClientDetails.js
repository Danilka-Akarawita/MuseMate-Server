const express = require("express");
const { insertValues,getAllClientDetails} = require("../controllers/ClientAccountController");
const router = express.Router();

router.get('/insertClient',insertValues);
router.get('/getClient',getAllClientDetails);

module.exports = router;