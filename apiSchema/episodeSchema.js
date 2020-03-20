const Joi = require("@hapi/joi");
module.exports.createEpisodeSchema = Joi.object().keys({
  name: Joi.string().required(),
  author: Joi.string().required()
});
