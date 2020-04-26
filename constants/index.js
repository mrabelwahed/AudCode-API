module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {}
  },
  episodeMessage: {
    EPISODE_CREATED: "episode created Successfully",
    EPISODE_FETCHED: "episode fetched successfully"
  },
  userMessage: {
    SIGNUP_SUCCESS: "signup success",
    LOGIN_SUCCESS: "login success",
    DUPLCATE_EMAIL: "user already exists with given email",
    USER_FETCHED: "user fetched successfully",
    USER_NOT_FOUND: "User not found",
    INVALID_PASSWORD: "invalid password"
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid Fields"
  }
};
