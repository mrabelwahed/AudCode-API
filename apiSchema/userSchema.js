const Joi = require("@hapi/joi");

module.exports.signup = Joi.object().keys({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports.login = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
