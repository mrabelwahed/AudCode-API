const episodeServcie = require("../service/episodeService");
const constants = require("../constants/index");

module.exports.createEpisode = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    console.log(req.body);
    const serviceResposne = await episodeServcie.createEpisode(req.body);
    response.status = 200;
    response.message = "episode created Successfully";
    response.body = serviceResposne;
  } catch (error) {
    console.log("something went wrong: controller : createEpisode", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
