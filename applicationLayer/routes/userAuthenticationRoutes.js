const express = require("express")
const router = express.Router();
const {registrationPageLoading,loginPageLoading} = require("../controllers/userAuthenticationController");
const {getOtpPage} = require("../controllers/otpController");




router.route("/").get(loginPageLoading)
router.route("/registration").get(registrationPageLoading)
router.route("/otp").get(getOtpPage)

module.exports = router;

