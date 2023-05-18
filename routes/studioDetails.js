const express = require("express");
const { insertValues,getAllStudioDetails,AddFeedBacks ,getAllFeedBacks} = require("../controllers/StudioControllers");
const router = express.Router();

router.get('/insert',insertValues);
router.get('/',getAllStudioDetails)
router.get('/feedbacks',getAllFeedBacks)
router.post('/feedback/:id',AddFeedBacks)

module.exports = router;