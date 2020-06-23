const express = require("express");
const router = express.Router();
const episodeController = require("../controller/episodeController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const episodeSchema = require("../apiSchema/episodeSchema");

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const dotenv = require("dotenv");
//////
dotenv.config();

let endpoint = "fra1.digitaloceanspaces.com/audio/";
const spacesEndpoint = new aws.Endpoint(endpoint);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: "Y3J4H3XOGP5UCQW6V372",
  secretAccessKey: "ekkQZVMasNx47rnoTA0mxk670xlKk7M32rfrbR3ftbw",
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "audcode-space",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (request, file, cb) {
      //console.log(file);
      url = "";
      cb(null, file.originalname);
    },
  }),
});

router.post(
  "/",
  upload.single("episode"),
  //uploadEpisode,
  //joiSchemaValidation.validateBody(episodeSchema.createEpisodeSchema),
  episodeController.createEpisode
);

router.get(
  "/",
  joiSchemaValidation.validateQuery(episodeSchema.getAllEpisodesSchema),
  episodeController.getAllEpisodes
);

module.exports = router;
