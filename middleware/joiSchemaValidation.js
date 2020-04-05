const Joi = require("@hapi/joi");
const constants = require("../constants");

const validateObjectSchema = (data, schema) => {
  let result = Joi.validate(data, schema);
  if (result.error) {
    const errorDetails = result.error.details.map(value => {
      return {
        error: value.message,
        path: value.path
      };
    });
    console.log("Joi Validation Result == ", errorDetails);
    return errorDetails;
  }
  return null;
};

module.exports.validateBody = schema => {
  return (req, res, next) => {
    console.log("validate body");
    console.log(req.body);
    let response = { ...constants.defaultServerResponse };
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }
    return next();
  };
};

module.exports.validateQuery = schema => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateObjectSchema(req.query, schema);
    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }
    return next();
  };
};
