const express = require("express");
const { insertValues,getAllStudioDetails,AddFeedBacks } = require("../controllers/StudioControllers");
const router = express.Router();

router.get('/insert',insertValues);
router.get('/',getAllStudioDetails)
router.post('/feedback/:id',AddFeedBacks)

module.exports = router;