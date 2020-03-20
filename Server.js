const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//database connection
dbConnection();
//cors
app.use(cors());
//request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//episode routes
app.use("/api/v1/episode", require("./routes/episodeRoutes"));

//subsctack middle ware
app.get("/", (req, res, next) => {
  res.send("hello Audcode");
});

app.listen(PORT, error => {
  console.log(error);
  console.log("server is listening on port " + PORT);
});

//error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {}
  });
});
