const Episode = require("../database/episodeModel");
module.exports.createEpisode = async serviceData => {
  try {
    let episode = new Episode({ ...serviceData });
    let result = await episode.save();
    return result.toObject();
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : createEpisode", error);
  }
};
