const express = require("express");
const { insertValues,getAllStudioDetails } = require("../controllers/StudioControllers");
const router = express.Router();

router.get('/insert',insertValues);
router.get('/',getAllStudioDetails)

module.exports = router;