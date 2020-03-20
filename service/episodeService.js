const Episode = require("../database/episodeModel");
const { formatMongoData } = require("../helper/dbHelper");
module.exports.createEpisode = async serviceData => {
  try {
    let episode = new Episode({ ...serviceData });
    let result = await episode.save();
    return formatMongoData(result);
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : createEpisode", error);
  }
};

module.exports.getAllEpisodes = async ({ skip = 0, limit = 10 }) => {
  try {
    let episodes = await Episode.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(episodes);
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : getAllEpisodes", error);
  }
};
