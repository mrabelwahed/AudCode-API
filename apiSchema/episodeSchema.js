const Joi = require("@hapi/joi");
module.exports.createEpisodeSchema = Joi.object().keys({
  name: Joi.string().required(),
  author: Joi.string().required(),
  tags: Joi.array().required(),
  content: Joi.string().required(),
  contentUrl: Joi.string().required(),
  url: Joi.string(),
});

module.exports.getAllEpisodesSchema = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string(),
  query: Joi.string(),
});
