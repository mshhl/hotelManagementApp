const express = require("express")
const router = express.Router();
const {registrationPageLoading,loginPageLoading,registration} = require("../controllers/userAuthenticationController");
const {getOtpPage} = require("../controllers/otpController");
const {loadHome} = require("../controllers/homeController");
const {jwtAuth} = require("../controllers/jwtauth");




router.route("/").get(jwtAuth,loginPageLoading)
router.route("/registration").get(jwtAuth,registrationPageLoading).post(registration)
router.route("/otp").get(getOtpPage)
router.route("/home").get(loadHome)


module.exports = router;

