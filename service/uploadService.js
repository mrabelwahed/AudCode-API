const aws = require("aws-sdk");
const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
let endpoint = "fra1.digitaloceanspaces.com/audio/";
const spacesEndpoint = new aws.Endpoint(endpoint);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
let url = "";
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.Bucket,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function(request, file, cb) {
      console.log(file);
      url = file.originalname;
      cb(null, file.originalname);
    }
  })
}).array("upload", 1);

app.post("/upload", function(request, response, next) {
  upload(request, response, function(error) {
    if (error) {
      console.log(error);
      return response.redirect("/error");
    }
    console.log(url);
    console.log("File uploaded successfully ");
    response.redirect("/success");
  });
});
