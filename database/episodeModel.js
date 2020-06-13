const mongoose = require("mongoose");
const episodeSchema = new mongoose.Schema(
  {
    name: String,
    author: String,
    tags: Array,
    content: String,
    contentUrl: String,
    url: String,
  },
  {
    timestamps: true,
    toObject: {
      // to delete __v and convert _id to be id
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Episode", episodeSchema);
