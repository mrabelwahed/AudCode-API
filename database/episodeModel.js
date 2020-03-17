const mongoose = require("mongoose");
const episodeSchema = new mongoose.Schema(
  {
    name: String,
    author: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Episode", episodeSchema);
