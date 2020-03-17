const express = require("express");
const router = express.Router();
const episodeController = require("../controller/episodeController");

router.post("/", episodeController.createEpisode);

module.exports = router;
