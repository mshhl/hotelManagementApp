const express = require("express")
const router = express.Router();
const {registrationPageLoading,loginPageLoading,registration,login} = require("../controllers/userAuthenticationController");
const {getOtpPage} = require("../controllers/otpController");
const {loadHome} = require("../controllers/homeController");
const {jwtAuth,jwtAfterCheck} = require("../controllers/jwtauth");




router.route("/").get(jwtAuth,loginPageLoading).post(login)
router.route("/registration").get(jwtAuth,registrationPageLoading).post(registration)
router.route("/otp").get(jwtAfterCheck,getOtpPage)
router.route("/home").get(jwtAfterCheck,loadHome)


module.exports = router;

