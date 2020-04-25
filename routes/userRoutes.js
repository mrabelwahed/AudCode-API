const app = require("express");
const router = app.Router();
const userController = require("../controller/userController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const userSchema = require("../apiSchema/userSchema");
router.post(
  "/signup",
  joiSchemaValidation.validateBody(userSchema.signup),
  userController.signup
);

module.exports = router;
