const express = require("express");
const { insertValues } = require("../controllers/StudioControllers");
const router = express.Router();

router.get('/insert',insertValues);

module.exports = router;