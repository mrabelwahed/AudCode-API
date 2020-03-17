const Episode = require("../database/episodeModel");
module.exports.createEpisode = async serviceData => {
  try {
    let episode = new Episode({ ...serviceData });
    return await episode.save();
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : createEpisode", error);
  }
};
