const constants = require("../constants");
const User = require("../database/userModel");
const bcrypt = require("bcrypt");
const { formatMongoData } = require("../helper/dbHelper");
module.exports.signup = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constants.userMessage.DUPLCATE_EMAIL);
    }
    // insert new user in db
    password = await bcrypt.hash(password, 12);
    const newUser = User({ email, password });
    let result = await newUser.save();
    return formatMongoData(result);
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : signup", error);
  }
};
