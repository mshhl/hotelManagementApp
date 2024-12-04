const express = require("express")
const router = express.Router();
const {registrationPageLoading,loginPageLoading} = require("../controllers/userAuthenticationController");



router.route("/").get(loginPageLoading)
router.route("/registration").get(registrationPageLoading)

module.exports = router;

