const episodeServcie = require("../service/episodeService");
const constants = require("../constants/index");

module.exports.createEpisode = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    console.log(req.file);
    console.log(req.body);
    const serviceResposne = await episodeServcie.createEpisode(
      req.body,
      req.file.location
    );
    response.status = 200;
    response.message = constants.episodeMessage.EPISODE_CREATED;
    response.body = serviceResposne;
  } catch (error) {
    console.log("something went wrong: controller : createEpisode", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.getAllEpisodes = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResposne = await episodeServcie.getAllEpisodes(req.query);
    response.status = 200;
    response.message = constants.episodeMessage.EPISODE_FETCHED;
    response.body = serviceResposne;
  } catch (error) {
    console.log("something went wrong: controller : getAllEpisodes", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
