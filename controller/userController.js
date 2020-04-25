const constants = require("../constants/index");
const userService = require("../service/userService");
module.exports.signup = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    console.log(req.body);
    const serviceResposne = await userService.signup(req.body);
    response.status = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = serviceResposne;
  } catch (error) {
    console.log("something went wrong: controller : signup", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
