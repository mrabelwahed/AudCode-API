const express = require("express");
const router = express.Router();
const episodeController = require("../controller/episodeController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const episodeSchema = require("../apiSchema/episodeSchema");

router.post(
  "/",
  joiSchemaValidation.validateBody(episodeSchema.createEpisodeSchema),
  episodeController.createEpisode
);

router.get(
  "/",
  joiSchemaValidation.validateQuery(episodeSchema.getAllEpisodesSchema),
  episodeController.getAllEpisodes
);

module.exports = router;
